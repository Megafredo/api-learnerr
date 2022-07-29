-- Revert learnerr:learnerr_v12 from pg

BEGIN;

DROP FUNCTION
checkWord(word TEXT);

COMMIT;
