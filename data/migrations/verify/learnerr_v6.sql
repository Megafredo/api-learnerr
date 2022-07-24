-- Verify learnerr:learnerr_v6 on pg

BEGIN;


SELECT * FROM article_by_category(66);
SELECT * FROM article_by_user(1);
SELECT * FROM lastest_articles(4);
SELECT * FROM search_articles(
'{ 
   "search": "Javascript language search"
}
');

ROLLBACK;
