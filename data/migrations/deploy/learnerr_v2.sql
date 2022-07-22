-- SQLBook: Code
-- Deploy learnerr:learnerr_v2 to pg

BEGIN;

--& Create user
CREATE
OR REPLACE FUNCTION create_user(json) 
RETURNS TABLE (inserted_user TEXT) AS $$

BEGIN
INSERT INTO
        "user" (
        "username",
        "email",
        "password"
    )
VALUES
(
        ($1 ->> 'username')::TEXT,
        ($1 ->> 'email')::EMAIL,
        ($1 ->> 'password')::PWD
);
    RETURN QUERY 
    (SELECT "user".username
        FROM "user"
        ORDER BY "user".id DESC LIMIT 1);

    END

$$ LANGUAGE plpgsql VOLATILE;

--& Create article
CREATE
OR REPLACE FUNCTION create_article(json) 
RETURNS TABLE (inserted_article_id INT) AS $$

BEGIN
INSERT INTO 
        "article" (
        "title",
        "abstract",
        "content",
        "user_id",
        "status_id"
    )
VALUES
(
        ($1 ->> 'title')::TEXT,
        ($1 ->> 'abstract')::TEXT,
        ($1 ->> 'content')::TEXT,
        ($1 ->> 'user_id')::INTEGER,
        ($1 ->> 'status_id')::INTEGER
);
    RETURN QUERY 
    (SELECT "article".id
        FROM "article"
        ORDER BY "article".id DESC LIMIT 1);

    END

$$ LANGUAGE plpgsql VOLATILE;

--& Create article comment
CREATE
OR REPLACE FUNCTION create_article_comment(json) 
RETURNS TABLE (inserted_article_comment_id INT) AS $$

BEGIN
INSERT INTO 
        "article_comment" (
        "content",
        "user_id",
        "article_id"
    )
VALUES
(
        ($1 ->> 'content')::TEXT,
        ($1 ->> 'user_id')::INT,
        ($1 ->> 'article_id')::INT
);
    RETURN QUERY 
    (SELECT AC.id
        FROM "article_comment" AS AC
        ORDER BY AC.id DESC LIMIT 1);

    END

$$ LANGUAGE plpgsql VOLATILE;

--& Create error
CREATE
OR REPLACE FUNCTION create_error(json) 
RETURNS TABLE (inserted_error_id INT) AS $$

BEGIN
INSERT INTO 
        "error" (
        "error_snippet",
        "title",
        "abstract",
        "content",
        "user_id",
        "status_id",
        "error_comment_id"
    )
VALUES
(
        ($1 ->> 'error_snippet')::TEXT,
        ($1 ->> 'title')::TEXT,
        ($1 ->> 'abstract')::TEXT,
        ($1 ->> 'content')::TEXT,
        ($1 ->> 'user_id')::INTEGER,
        ($1 ->> 'status_id')::INTEGER,
        ($1 ->> 'error_comment_id')::INTEGER
);
    RETURN QUERY 
    (SELECT "error".id
        FROM "error"
        ORDER BY "error".id DESC LIMIT 1);

    END

$$ LANGUAGE plpgsql VOLATILE;

--& Create error comment
CREATE
OR REPLACE FUNCTION create_error_comment(json) 
RETURNS TABLE (inserted_error_comment_id INT) AS $$

BEGIN
INSERT INTO 
        "error_comment" (
        "content",
        "user_id",
        "error_id"
    )
VALUES
(
        ($1 ->> 'content')::TEXT,
        ($1 ->> 'user_id')::INT,
        ($1 ->> 'error_id')::INT
);
    RETURN QUERY 
    (SELECT EC.id
        FROM "error_comment" AS EC
        ORDER BY EC.id DESC LIMIT 1);

    END

$$ LANGUAGE plpgsql VOLATILE;

--& Create category
CREATE
OR REPLACE FUNCTION create_category(json) 
RETURNS TABLE (inserted_category_id INT) AS $$

BEGIN
INSERT INTO 
        "category" (
        "name",
        "logo_svg"
    )
VALUES
(
        ($1 ->> 'name')::TEXT,
        ($1 ->> 'logo_svg')::TEXT
);
    RETURN QUERY 
    (SELECT "category".id
        FROM "category"
        ORDER BY "category".id DESC LIMIT 1);

    END

$$ LANGUAGE plpgsql VOLATILE;


COMMIT;
