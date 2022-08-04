-- SQLBook: Code
-- Deploy learnerr:learnerr_v13 to pg

BEGIN;

--& Create article with categories
-- First create a function to insert data to pivot table
CREATE OR REPLACE FUNCTION article_has_category(articleId INT, categoryId INT)
RETURNS INT AS $$

BEGIN

INSERT INTO "article_has_category"("article_id", "category_id")
VALUES (articleId, categoryId);

RETURN (SELECT A.id FROM "article" AS A WHERE A.id = articleId);

END
$$ LANGUAGE plpgsql VOLATILE;


CREATE
OR REPLACE FUNCTION add_category_to_article(JSON) 
RETURNS BOOLEAN AS $$

DECLARE
_elem JSON;
_array JSON := ($1 ->> 'categories');

BEGIN

    PERFORM (SELECT CA."inserted_article_id" FROM create_article($1) AS CA);

FOR _elem IN SELECT * FROM json_array_elements(_array)
LOOP
    -- Reuse the insert function in a loop
    PERFORM(SELECT * FROM article_has_category((SELECT A.id FROM "article" AS A ORDER BY A.id DESC LIMIT 1),(_elem ->> 'id')::INT));
        
END LOOP;
  
    RETURN (SELECT COUNT(A.id)>0 FROM "article" AS A WHERE A.id = (SELECT A.id FROM "article" AS A ORDER BY A.id DESC LIMIT 1));
    
END

$$ LANGUAGE plpgsql VOLATILE;


--& Create article with categories
CREATE OR REPLACE FUNCTION error_has_category(errorId INT, categoryId INT)
RETURNS INT AS $$

BEGIN

INSERT INTO "error_has_category"("error_id", "category_id")
VALUES (errorId, categoryId);

RETURN (SELECT E.id FROM "error" AS E WHERE E.id = errorId);

END
$$ LANGUAGE plpgsql VOLATILE;


CREATE
OR REPLACE FUNCTION add_category_to_error(JSON) 
RETURNS BOOLEAN AS $$

DECLARE
_elem JSON;
_array JSON := ($1 ->> 'categories');

BEGIN

        PERFORM (SELECT CE."inserted_error_id" FROM create_error($1) AS CE);

FOR _elem IN SELECT * FROM json_array_elements(_array)
LOOP

        PERFORM(SELECT * FROM error_has_category((SELECT E.id FROM "error" AS E ORDER BY E.id DESC LIMIT 1),  (_elem ->> 'id')::INT));
        
END LOOP;
    RETURN (SELECT COUNT(E.id)>0 FROM "error" AS E WHERE E.id = (SELECT E.id FROM "error" AS E ORDER BY E.id DESC LIMIT 1));
    
END

$$ LANGUAGE plpgsql VOLATILE;


COMMIT;
