-- SQLBook: Code
-- Verify learnerr:learnerr_v1 on pg

BEGIN;

--& Check if tables exist in database
SELECT "id", "username", "email", "password", "is_active", "title", "presentation", "profile_pic_url", "linkedin_url", "github_url", "instagram_url", "twitter_url", "portfolio_url", "role_id", "created_at", "updated_at" FROM "user";
SELECT "id", "title", "abstract", "content", "user_id", "status_id", "created_at", "updated_at" FROM "article";
SELECT "id", "error_snippet", "title", "abstract", "content", "user_id", "status_id", "error_comment_id", "created_at", "updated_at" FROM "error";
SELECT "id", "content", "user_id", "article_id", "created_at", "updated_at" FROM "article_comment";
SELECT "id", "content", "user_id", "error_id", "created_at", "updated_at" FROM "error_comment";
SELECT "id", "name" FROM "role";
SELECT "id", "word" FROM "bad_word";
SELECT "id", "name" FROM "status";
SELECT "id", "name", "logo" FROM "category";
SELECT "id", "error_id", "category_id" FROM "error_has_category";
SELECT "id", "article_id", "category_id" FROM "article_has_category";

ROLLBACK;
