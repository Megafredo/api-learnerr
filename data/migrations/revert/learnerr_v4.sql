-- Revert learnerr:learnerr_v4 from pg

BEGIN;

DROP FUNCTION 
user_identity(json);

DROP TYPE identity;

COMMIT;
