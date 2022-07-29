-- SQLBook: Code
-- Revert learnerr:learnerr_v11 from pg

BEGIN;

DROP FUNCTION 
user_detailed (userId INT),
last_articles_detailed (userId INT),
last_errors_detailed (userId INT),
user_articles_detailed (userId INT),
user_errors_detailed (userId INT);

COMMIT;
