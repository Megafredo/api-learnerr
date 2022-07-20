-- SQLBook: Code
-- Revert learnerr:learnerr_v1 from pg

BEGIN;

DROP INDEX 
"category_brin_idx",
"bad_word_brin_idx",
"error_comment_brin_idx",
"article_comment_brin_idx",
"error_brin_idx",
"article_brin_idx",
"user_brin_idx";

DROP TABLE 
"article_has_category", 
"error_has_category", 
"category", 
"status", 
"bad_word", 
"role", 
"error_comment", 
"article_comment", 
"error", 
"article", 
"user";

DROP DOMAIN EMAIL, PWD, LINK_URL;

COMMIT;
