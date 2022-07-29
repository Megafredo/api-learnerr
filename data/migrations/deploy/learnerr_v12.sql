-- SQLBook: Code
-- Deploy learnerr:learnerr_v12 to pg

BEGIN;
CREATE OR REPLACE
FUNCTION checkWord(T TEXT) RETURNS BOOLEAN AS $$ 

BEGIN
RETURN(SELECT COUNT(id)>0 AS result FROM "bad_word" AS BW
WHERE unaccent(BW.word) ILIKE unaccent(T));
END

$$ LANGUAGE plpgsql VOLATILE;

COMMIT;
