-- SQLBook: Code
-- Verify learnerr:learnerr_v13 on pg

BEGIN;


SELECT * FROM add_category_to_article(
'{
        "title": "Hello",
        "abstract": "Description",
        "content": "Ceci est une création d''article ! Et on lui ajoute des catégories",
        "user_id": 1,
        "status_id": 3,
        "categories": [
            {"id":12},
            {"id":3},
            {"id":8},
            {"id":5},
            {"id":1}
        ]
}
'
);

SELECT * FROM add_category_to_error(
'{  
        "error_snippet": "error snippet",
        "title": "Hello",
        "abstract": "Description",
        "content": "Ceci est une création d''article ! Et on lui ajoute des catégories",
        "user_id": 1,
        "status_id": 3,
        "categories": [
            {"id":1},
            {"id":3},
            {"id":13},
            {"id":2},
            {"id":10}
        ]
}
'
);



ROLLBACK;
