-- Revert learnerr:learnerr_v10 from pg

BEGIN;

DROP VIEW 
articles_details,
errors_details;

COMMIT;
