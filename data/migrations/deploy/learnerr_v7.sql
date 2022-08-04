-- SQLBook: Code
-- Deploy learnerr:learnerr_v7 to pg

BEGIN;

--& Fetch all categories by article

CREATE
OR REPLACE FUNCTION categories_by_article(articleId INT)
RETURNS TABLE (category JSON, article_title TEXT, article_id INT) AS $$

BEGIN
RETURN QUERY(SELECT JSON_AGG(json_build_object(
	'category_name', C.name,
	'logo', C.logo)), A.title, A.id
FROM "category" AS C
    JOIN "article_has_category" AS AC
    ON C.id = AC.category_id
    JOIN "article" AS A
    ON AC.article_id = A.id
WHERE A.id = articleId::INT
GROUP BY A.title, A.id
);
			 
END
$$ LANGUAGE plpgsql VOLATILE;

--& Fetch all categories by error

CREATE
OR REPLACE FUNCTION categories_by_error(errorId INT)
RETURNS TABLE (category JSON, error_title TEXT, error_id INT) AS $$

BEGIN
RETURN QUERY(SELECT JSON_AGG(json_build_object(
	'category_name', C.name,
	'logo', C.logo)), E.title, E.id
FROM "category" AS C
    JOIN "error_has_category" AS EC
    ON C.id = EC.category_id
    JOIN "error" AS E
    ON EC.error_id = E.id
WHERE E.id = errorId::INT
GROUP BY E.title, E.id
);
			 
END
$$ LANGUAGE plpgsql VOLATILE;

COMMIT;
