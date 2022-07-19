-- SQLBook: Code
-- Verify learnerr:learnerr_v1 on pg

BEGIN;

--& Check if tables exist in database
SELECT "id" FROM "user";
SELECT "id" FROM "article";
SELECT "id" FROM "error";
SELECT "id" FROM "article_comment";
SELECT "id" FROM "error_comment";
SELECT "id" FROM "role";
SELECT "id" FROM "bad_word";
SELECT "id" FROM "status";
SELECT "id" FROM "category";
SELECT "id" FROM "error_has_category";
SELECT "id" FROM "article_has_category";

ROLLBACK;
