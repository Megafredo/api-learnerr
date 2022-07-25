-- Revert learnerr:learnerr_v5 from pg

BEGIN;

DROP FUNCTION 
error_by_category(categoryId INT), 
lastest_error_tickets(nb INT),
error_by_user(userId INT),
search_errors(json);

DROP TYPE lastest_errors;
DROP TYPE search_error;

DROP EXTENSION pg_trgm;


COMMIT;
