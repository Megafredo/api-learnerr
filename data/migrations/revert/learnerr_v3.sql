-- SQLBook: Code
-- Revert learnerr:learnerr_v3 from pg

BEGIN;

DROP FUNCTION
    update_category(json),
    update_error_comment(json),
    update_error(json),
    update_article_comment(json),
    update_article(json),
    update_user(json);

COMMIT;
