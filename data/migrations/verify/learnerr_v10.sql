-- Verify learnerr:learnerr_v10 on pg

BEGIN;

SELECT * FROM articles_details;
SELECT * FROM errors_details;

ROLLBACK;
