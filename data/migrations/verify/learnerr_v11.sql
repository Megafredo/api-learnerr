-- Verify learnerr:learnerr_v11 on pg

BEGIN;

SELECT A_detailed FROM last_articles_detailed(1);

SELECT E_detailed FROM last_errors_detailed(1);

SELECT UA_detailed FROM user_articles_detailed(1);

SELECT UE_detailed FROM user_errors_detailed(1);

SELECT U_detailed FROM user_detailed (1);

ROLLBACK;
