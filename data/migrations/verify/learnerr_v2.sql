-- SQLBook: Code
-- Verify learnerr:learnerr_v2 on pg

BEGIN;

SELECT * FROM create_user(
'
{
    "username":"Test",
    "email":"testaaaaaaaaaa@test.com",
    "password":"$2y$10$joaAh5g16L0LzPdp0HgTnOZ42QYTjfYDWWAxZqUwLampY6KvFzbc."
}
'
);

SELECT * FROM create_article(
'
{
    "title":"Test",
    "abstract":"Petite description",
    "content":"test",
    "user_id":"5",
    "status_id": 2
}
'
);

SELECT * FROM create_article_comment(
'
{
    "content":"test",
    "user_id": 1,
    "article_id": 3
}
'
);

SELECT * FROM create_error(
'
{
    "error_snippet":"OMG LA BIG ERREUR",
    "title":"Petite description",
    "abstract":"lkjzndlkazndknaznazldnazlkdnazlndlzakd",
    "content":"zdazdazdazdazdzad azdazdazdazd adazd azd azdazdazdad",
    "user_id": 2,
    "status_id": 2,
    "error_comment_id": 5
}
'
);

SELECT * FROM create_error_comment(
'
{
    "content":"lkjzndlkazndknaznazldnazlkdnazlndlzakd",
    "user_id": 11,
    "error_id": 3
}
'
);

SELECT * FROM create_category(
'
{
    "name":"Petite description",
    "logo":"lkjzndlkazndknaznazldnazlkdnazlndlzakd"
}
'
);

ROLLBACK;
