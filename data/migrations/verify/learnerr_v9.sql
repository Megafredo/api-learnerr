-- Verify learnerr:learnerr_v9 on pg

BEGIN;

SELECT * FROM user_article_comments(1);
SELECT * FROM user_error_comments(1);

ROLLBACK;
