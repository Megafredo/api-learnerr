-- Verify learnerr:learnerr_v7 on pg

BEGIN;

SELECT * FROM categories_by_article(7);
SELECT * FROM categories_by_error(7);

ROLLBACK;
