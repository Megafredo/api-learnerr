-- SQLBook: Code
-- Revert learnerr:learnerr_v13 from pg

BEGIN;

DROP FUNCTION 
add_category_to_article(JSON),
article_has_category(articleId INT, categoryId INT),

add_category_to_error(JSON),
error_has_category(errorId INT, categoryId INT);


COMMIT;
