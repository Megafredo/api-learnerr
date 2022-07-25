-- SQLBook: Code
-- Verify learnerr:learnerr_v5 on pg

BEGIN;

SELECT * FROM error_by_category(66);
SELECT * FROM error_by_user(1);
SELECT * FROM lastest_error_tickets(4);
SELECT * FROM search_errors(
'{ 
   "search": "TypeError: truc Cannot read proper"
}
');

ROLLBACK;
