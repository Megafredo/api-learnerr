-- Revert learnerr:learnerr_v6 from pg

BEGIN;

DROP FUNCTION 
article_by_category(categoryId INT), 
lastest_articles(limit_nb INT, offset_nb INT),
article_by_user(userId INT),
search_articles(json);

DROP TYPE lastest_articles;
DROP TYPE search_article;

DROP EXTENSION pg_trgm;

COMMIT;
