-- Verify learnerr:learnerr_v12 on pg

BEGIN;

SELECT * FROM checkWord('imbe');

ROLLBACK;
