-- SQLBook: Code
-- Deploy learnerr:learnerr_v4 to pg

BEGIN;

CREATE TYPE identity AS (
    "id" INT,
    "username" TEXT,
    "title" TEXT,
    "profile_pic_url" LINK_URL,
    "password" PWD,
    "isActive" BOOLEAN,
    "role" TEXT
);

CREATE
OR REPLACE FUNCTION user_identity(json) 
RETURNS SETOF identity AS $$

BEGIN
    
RETURN QUERY 
    (SELECT U.id, U.username, U.title, U.profile_pic_url, U.password, U.is_active, "role".name AS role  
     FROM "role"
        JOIN  "user" AS U
        ON "role".id = U.role_id
        WHERE U.email = ($1 ->>'email')::EMAIL);

END

$$ LANGUAGE plpgsql VOLATILE;

COMMIT;
