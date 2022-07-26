-- SQLBook: Code
-- Deploy learnerr:learnerr_v8 to pg

BEGIN;

--& Delete comment from an article
CREATE
OR REPLACE FUNCTION delete_article_comment(json)
RETURNS TABLE (delete_article_comment_id INT) AS $$
BEGIN

DELETE FROM "article_comment" AS AC
WHERE AC.id = ($1->> 'id')::INT
AND AC."user_id" = ($1->> 'user_id')::INT
AND AC."article_id" = ($1->> 'article_id')::INT;

RETURN QUERY(
    SELECT AC.id 
    FROM "article_comment" AS AC
    WHERE AC.id = ($1->> 'id')::INT);

END

$$ LANGUAGE plpgsql VOLATILE;


--& Delete comment from an error ticket

CREATE
OR REPLACE FUNCTION delete_error_comment(json)
RETURNS TABLE (delete_error_comment_id INT) AS $$
BEGIN

DELETE FROM "error_comment" AS EC
WHERE EC.id = ($1->> 'id')::INT
AND EC."user_id" = ($1->> 'user_id')::INT
AND EC."error_id" = ($1->> 'error_id')::INT;

RETURN QUERY(
    SELECT EC.id 
    FROM "error_comment" AS EC
    WHERE EC.id = ($1->> 'id')::INT);

END

$$ LANGUAGE plpgsql VOLATILE;

COMMIT;
