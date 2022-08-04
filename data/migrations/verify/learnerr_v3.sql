-- SQLBook: Code
-- Verify learnerr:learnerr_v3 on pg

BEGIN;

SELECT * FROM update_user(
'
{
    "username":"Yumedoooooooooo",
    "email":"yumedo@test.com",
    "password":"$2y$10$joaAh5g16L0LzPdp0HgTnOZ42QYTjfYDWWAxZqUwLampY6KvFzbc.",
    "title":"Titre test",
    "id": 11
}
'
);

SELECT * FROM update_article(
'
{
    "title":"Yumedoo",
    "abstract":"Petite description",
    "content":"lkjzndlkazndknaznazldnazlkdnazlndlzakd",
    "user_id":"5",
    "status_id": 2,
    "id":2
}
'
);

SELECT * FROM update_article_comment(
'
{
    "content":"Bla bla bla blaaaaaaaaa",
    "user_id": 11,
    "article_id": 3,
    "id": 11
}
'
);

SELECT * FROM update_error(
'
{
    "error_snippet":"OMG LA BIG ERREUR",
    "title":"Petite description",
    "abstract":"lkjzndlkazndknaznazldnazlkdnazlndlzakd",
    "content":"zdazdazdazdazdzad azdazdazdazd adazd azd azdazdazdad",
    "user_id": 2,
    "status_id": 2,
    "error_comment_id": 2,
    "id":5
}
'
);

SELECT * FROM update_error_comment(
'
{
    "content":"Bla bla bla blaaaaaaaaa",
    "user_id": 11,
    "article_id": 3,
    "id": 11
}
'
);

SELECT * FROM update_category(
'
{
    "name":"Petite description",
    "logo":"aaaaaaaaaaaaaaaaaaa",
    "id":2
}
'
);

ROLLBACK;
