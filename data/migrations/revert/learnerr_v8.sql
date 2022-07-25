-- Revert learnerr:learnerr_v8 from pg

BEGIN;

DROP FUNCTION 
delete_article_comment(json),
delete_error_comment(json);

COMMIT;
