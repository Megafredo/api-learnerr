-- Revert learnerr:learnerr_v7 from pg

BEGIN;

DROP FUNCTION 
categories_by_article(articleId INT),
categories_by_error(errorId INT);

COMMIT;
