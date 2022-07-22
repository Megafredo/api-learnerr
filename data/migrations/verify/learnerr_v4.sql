-- Verify learnerr:learnerr_v4 on pg

BEGIN;

SELECT * FROM user_identity(
'
{
    "email":"Antonia31@hotmail.com"
}
'
);

ROLLBACK;
