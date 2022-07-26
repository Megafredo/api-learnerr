-- Deploy learnerr:learnerr_v9 to pg

BEGIN;

--& Fetch all article comments by user

CREATE TYPE user_article_comments AS (
    "user_id" INT,
    "username" TEXT,
    "article_id" INT,
    "article_title" TEXT,
    "article_created_at" TIMESTAMPTZ,
    "comments_content" JSON
);         
  
CREATE OR REPLACE
FUNCTION user_article_comments(userId INT)
RETURNS SETOF user_article_comments AS $$

BEGIN

RETURN QUERY(SELECT U.id AS user_id, U.username,
          A.id AS article_id, A.title AS article_title, 
          A.created_at AS article_created_at,
          JSON_AGG(json_build_object
               ('content', AC.content)) AS comments_content
FROM "article_comment" AS AC
JOIN "user" AS U
            ON U.id = AC.user_id
JOIN "article" AS A
             ON A.user_id = U.id
WHERE U.id = userId
GROUP BY A.title, article_created_at, A.id, U.username, U.id);

END

$$ LANGUAGE plpgsql VOLATILE;


--& Fetch all error comments by user

CREATE TYPE user_error_comments AS (
    "user_id" INT,
    "username" TEXT,
    "error_id" INT,
    "error_title" TEXT,
    "error_created_at" TIMESTAMPTZ,
    "comments_content" JSON
);         
  
CREATE OR REPLACE
FUNCTION user_error_comments(userId INT)
RETURNS SETOF user_error_comments AS $$

BEGIN

RETURN QUERY(SELECT U.id AS user_id, U.username,
          E.id AS error_id, E.title AS error_title, 
          E.created_at AS error_created_at,
          JSON_AGG(json_build_object
               ('content', EC.content)) AS comments_content
FROM "error_comment" AS EC
JOIN "user" AS U
            ON U.id = EC.user_id
JOIN "error" AS E
             ON E.user_id = U.id
WHERE U.id = userId
GROUP BY E.title, error_created_at, E.id, U.username, U.id);

END

$$ LANGUAGE plpgsql VOLATILE;

COMMIT;
