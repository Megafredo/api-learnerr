-- SQLBook: Code
-- Deploy learnerr:learnerr_v12 to pg

BEGIN;
CREATE EXTENSION "unaccent";
CREATE OR REPLACE
FUNCTION checkWord(word_message TEXT) 
RETURNS BOOLEAN AS $$ 

BEGIN
RETURN(SELECT COUNT(id)>0 AS result FROM "bad_word" AS BW
WHERE unaccent(BW.word) ILIKE (unaccent(word_message)));
-- RETURN QUERY(
--     SELECT DISTINCT REGEXP_MATCHES(unaccent(BW.word),(unaccent(T) || '.+$' ))
--     FROM "bad_word" AS BW);

END

$$ LANGUAGE plpgsql VOLATILE;


COMMIT;
