-- Revert learnerr:learnerr_v9 from pg

BEGIN;

DROP FUNCTION 
user_article_comments(userId INT),
user_error_comments(userId INT);

DROP TYPE
user_article_comments,
user_error_comments;

COMMIT;
