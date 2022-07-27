-- Deploy learnerr:learnerr_v10 to pg

BEGIN;

--& Create view articles details
CREATE VIEW articles_details AS
SELECT A.id, A.title, A.abstract, A.content, A.created_at,
    JSON_AGG(DISTINCT C.name) AS category,
    json_build_object('id', U.id,
                 'username',U.username,
                 'title', U.title,
                 'profile_pic_url', U.profile_pic_url) AS user,
    (SELECT JSON_AGG(
        json_build_object(
        'id', AC.id,
        'content', AC.content,
        'created_at', AC.created_at,
        'user', (json_build_object(
                'id', U.id,
                'username', U.username,
                'title', U.title,
                'profile_pic_url', U.profile_pic_url))))
        FROM "article_comment" AS AC
        JOIN "user" AS U
        ON AC.user_id = U.id
        WHERE A.id = AC.article_id) AS comments 
FROM "article" AS A
LEFT JOIN "article_has_category" AS AHC
    ON AHC.article_id = A.id
LEFT JOIN "category" AS C
    ON C.id = AHC.category_id
LEFT JOIN "article_comment" AS AC
    ON AC.article_id = A.id
LEFT JOIN "user" AS U
    ON A.user_id = U.id
GROUP BY A.id, U.id
ORDER BY A.created_at DESC;

--& Create view errors details

CREATE VIEW errors_details AS
SELECT E.id, E.title, E.abstract, E.error_snippet, E.content, E.created_at,
    JSON_AGG(DISTINCT C.name) AS category,
    json_build_object('id', U.id,
                 'username',U.username,
                 'title', U.title,
                 'profile_pic_url', U.profile_pic_url) AS user,
    (SELECT JSON_AGG(
        json_build_object(
        'id', EC.id,
        'content', EC.content,
        'created_at', EC.created_at,
        'user', (json_build_object(
                'id', U.id,
                'username', U.username,
                'title', U.title,
                'profile_pic_url', U.profile_pic_url))))
        FROM "error_comment" AS EC
        JOIN "user" AS U
        ON EC.user_id = U.id
        WHERE E.id = EC.error_id) AS comments 
FROM "error" AS E
LEFT JOIN "error_has_category" AS EHC
    ON EHC.error_id = E.id
LEFT JOIN "category" AS C
    ON C.id = EHC.category_id
LEFT JOIN "error_comment" AS EC
    ON EC.error_id = E.id
LEFT JOIN "user" AS U
    ON E.user_id = U.id
GROUP BY E.id, U.id;

COMMIT;