-- SQLBook: Code
-- Revert learnerr:learnerr_v2 from pg

BEGIN;

DROP FUNCTION
    create_category(json),
    create_error_comment(json),
    create_error(json),
    create_article_comment(json),
    create_article(json),
    create_user(json);

COMMIT;
