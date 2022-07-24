-- Deploy learnerr:learnerr_v5 to pg

BEGIN;


--& Fetch all error ticket by category
CREATE
OR REPLACE FUNCTION error_by_category(categoryId INT) 
RETURNS TABLE (error_tickets JSON, category_id INT, category TEXT) AS $$

BEGIN

RETURN QUERY(SELECT JSON_AGG(json_build_object (
'error_snippet',E.error_snippet,
'title', E.title,
'abstract', E.abstract
)) AS title, 
C.id, 
C.name
FROM "error" AS E
    JOIN "error_has_category" as EC
    ON E.id = EC.error_id
    JOIN "category" AS C
    ON EC.category_id = C.id
    WHERE C.id = categoryId::INT
    GROUP BY C.name, C.id);

END

$$ LANGUAGE plpgsql VOLATILE;


--& Fetch all error ticket by user
CREATE 
OR REPLACE FUNCTION error_by_user(userId INT)
RETURNS TABLE (error_tickets JSON, user_id INT, users_email EMAIL) AS $$

BEGIN

RETURN QUERY(SELECT JSON_AGG(json_build_object(
'error_snippet', E.error_snippet,
'title', E.title,
'abstract', E.abstract,
'content', E.content
)), U.id, U.email
FROM "error" AS E
	JOIN "user" AS U
	ON U.id = E.user_id
	WHERE E.user_id = userId::INT
	GROUP BY U.id, U.email);

END

$$ LANGUAGE plpgsql VOLATILE;


--& Fetch lastest error ticket
CREATE TYPE lastest_errors AS(
"id" INT,
"snippet" TEXT,
"title" TEXT,
"abstract" TEXT,
"content" TEXT,
"created_at" TIMESTAMPTZ
);


CREATE
OR REPLACE FUNCTION lastest_error_tickets(nb INT) 
RETURNS SETOF lastest_errors AS $$

BEGIN

RETURN QUERY (
    SELECT E.id, E.error_snippet, E.title, E.abstract, E.content, E.created_at 
    FROM "error" AS E
    ORDER BY E.created_at DESC
    LIMIT nb::INT);
    
END

$$ LANGUAGE plpgsql VOLATILE;


--& Search all error ticket
-- CREATE TYPE search_error AS(
--     "id" INT,
--     "snippet" TEXT,
--     "title" TEXT,
--     "abstract" TEXT,
--     "content" TEXT,
--     "created_at" TIMESTAMPTZ
-- );

-- CREATE
-- OR REPLACE FUNCTION search_error(json) 
-- RETURNS SETOF search_error AS $$

-- DECLARE
-- _search TEXT := ($1 ->> 'search')::TEXT;

-- BEGIN
-- -- RAISE NOTICE 'Print %', $1; 

-- RETURN QUERY(
-- SELECT E."id", E."error_snippet", E."title", E."abstract", E."content", E."created_at"
--     FROM error AS E
--     WHERE E."error_snippet" 
--     ILIKE '%'|| _search ||'%'
--     ORDER BY E.created_at DESC);
    
-- END

-- $$ LANGUAGE plpgsql VOLATILE;

--& Search all error ticket Version 2
CREATE EXTENSION pg_trgm;

CREATE TYPE search_error AS(
    "id" INT,
    "snippet" TEXT,
    "title" TEXT,
    "abstract" TEXT,
    "content" TEXT,
    "created_at" TIMESTAMPTZ
);

CREATE
OR REPLACE FUNCTION search_errors(json) 
RETURNS SETOF search_error AS $$

DECLARE
_search TEXT := ($1 ->> 'search')::TEXT;

BEGIN
-- RAISE NOTICE 'Print %', $1; 

RETURN QUERY(
SELECT E."id", E."error_snippet", E."title", E."abstract", E."content", E."created_at"
    FROM error AS E
    WHERE _search % 
    ANY(STRING_TO_ARRAY(E."error_snippet", ' ')) 
    ORDER BY E.created_at DESC);
    
END

$$ LANGUAGE plpgsql VOLATILE;

-- SELECT show_trgm('error data');

-- search by : find matching words psql where
-- https://www.freecodecamp.org/news/fuzzy-string-matching-with-postgresql/

COMMIT;
