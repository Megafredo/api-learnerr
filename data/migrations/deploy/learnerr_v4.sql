-- Deploy learnerr:learnerr_v4 to pg

BEGIN;

CREATE TYPE identity AS (
    id INT,
    email EMAIL,
    password PWD,
    role TEXT
);


CREATE
OR REPLACE FUNCTION user_identity(json) 
RETURNS SETOF identity AS $$

BEGIN
    
RETURN QUERY 
    (SELECT U.id, U.email, U.password, "role".name AS role  
     FROM "role"
        JOIN  "user" AS U
        ON "role".id = U.role_id
        WHERE U.email = ($1 ->>'email')::EMAIL);

END

$$ LANGUAGE plpgsql VOLATILE;

COMMIT;
