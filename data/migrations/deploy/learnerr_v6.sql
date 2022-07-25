-- Deploy learnerr:learnerr_v6 to pg

BEGIN;


--& Fetch all article by category
CREATE
OR REPLACE FUNCTION article_by_category(categoryId INT) 
RETURNS TABLE (articles JSON, category_id INT, category TEXT) AS $$

BEGIN

RETURN QUERY(SELECT JSON_AGG(json_build_object (
'title', A.title,
'abstract', A.abstract
)) AS title, 
C.id, 
C.name
FROM "article" AS A
    JOIN "article_has_category" as AC
    ON A.id = AC.article_id
    JOIN "category" AS C
    ON AC.category_id = C.id
    WHERE C.id = categoryId::INT
    GROUP BY C.name, C.id);

END

$$ LANGUAGE plpgsql VOLATILE;


--& Fetch all articles by user
CREATE 
OR REPLACE FUNCTION article_by_user(userId INT)
RETURNS TABLE (articles JSON, user_id INT, users_email EMAIL) AS $$

BEGIN

RETURN QUERY(SELECT JSON_AGG(json_build_object(
'title', A.title,
'abstract', A.abstract,
'content', A.content
)), U.id, U.email
FROM "article" AS A
	JOIN "user" AS U
	ON U.id = A.user_id
	WHERE A.user_id = userId::INT
	GROUP BY U.id, U.email);

END

$$ LANGUAGE plpgsql VOLATILE;


-- --& Fetch lastest articles
CREATE TYPE lastest_articles AS(
"id" INT,
"title" TEXT,
"abstract" TEXT,
"content" TEXT,
"created_at" TIMESTAMPTZ
);


CREATE
OR REPLACE FUNCTION lastest_articles(nb INT) 
RETURNS SETOF lastest_articles AS $$

BEGIN

RETURN QUERY (
    SELECT A.id, A.title, A.abstract, A.content, A.created_at 
    FROM "article" AS A
    ORDER BY A.created_at DESC
    LIMIT nb::INT);
    
END

$$ LANGUAGE plpgsql VOLATILE;


--& Search all articles
CREATE TYPE search_article AS(
    "id" INT,
    "title" TEXT,
    "abstract" TEXT,
    "content" TEXT,
    "created_at" TIMESTAMPTZ
);

CREATE
OR REPLACE FUNCTION search_articles(json) 
RETURNS SETOF search_article AS $$

DECLARE
_search TEXT := ($1 ->> 'search')::TEXT;

BEGIN
-- RAISE NOTICE 'Print %', $1; 

RETURN QUERY(
SELECT A."id", A."title", A."abstract", A."content", A."created_at"
    FROM "article" AS A
    WHERE 
    (_search % ANY(STRING_TO_ARRAY(A."abstract", ' ')))
    OR
    (_search % ANY(STRING_TO_ARRAY(A."title", ' ')))
    ORDER BY A.created_at DESC);
    
END

$$ LANGUAGE plpgsql VOLATILE;

COMMIT;