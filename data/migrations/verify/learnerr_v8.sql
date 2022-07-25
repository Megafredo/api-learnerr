-- Verify learnerr:learnerr_v8 on pg

BEGIN;

SELECT * FROM delete_article_comment(
'
    {
    "id":11,
    "user_id":1,
    "article_id":1
    }
'
);

SELECT * FROM delete_error_comment(
'
    {
    "id":1,
    "user_id":8,
    "error_id":3
    }
'
);

ROLLBACK;
