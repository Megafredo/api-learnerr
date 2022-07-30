-- SQLBook: Code
--* VERSION 2
--& Last articles detailed
CREATE OR REPLACE FUNCTION last_articles_detailed (userId INT)
RETURNS TABLE (A_detailed JSON) AS $$

BEGIN

RETURN QUERY (
SELECT json_agg(
            json_build_object(
            'id', ART.id,
            'title', ART.title,
            'abstract', ART.abstract,
            'content', ART.content,
            'created_at', ART.created_at,
            
            'categories', 
                COALESCE((SELECT JSON_AGG(C.name)
                   FROM "category" AS C
                   JOIN "article_has_category" AS AHCAT
                     ON AHCAT.category_id = C.id
                   JOIN "article" AS ARTC
                     ON ARTC.id = AHCAT.article_id
                   WHERE  ARTC.user_id = ART.user_id
                   AND ARTC.id = ART.id), '[]'),
           
            'cheers_count', 3,
           
            'user', 
                (SELECT json_build_object(
                        'id', USE.id, 
                        'username', USE.username, 
                        'title', USE.title,  
                        'profile_pic_url', USE.profile_pic_url)
                  FROM "user" AS USE
                  WHERE USE.id = ART.user_id
                ),
             
            'comments', 
                  COALESCE((
                      SELECT JSON_AGG(
                        json_build_object(
                        'id', AComm.id,
                        'content', AComm.content,
                        'created_at', AComm.created_at,
                        'user', (json_build_object(
                                'id', UComm.id,
                                'username', UComm.username,
                                'title', UComm.title,
                                'profile_pic_url', UComm.profile_pic_url))) 
                             ORDER BY AComm.created_at DESC)
                        FROM "article_comment" AS AComm
                        JOIN "user" AS UComm
                            ON AComm.user_id = UComm.id
                        WHERE  AComm.article_id = ART.id
                        ) ,'[]'),
               
            'user_last_comment_id',
                (SELECT AClast.id --VIEW
                 FROM "article_comment" AS AClast
                 JOIN "user" AS Us
                    ON AClast.user_id = Us.id
                 WHERE AClast.article_id = ART.id
                 ORDER BY AClast.created_at DESC
                 LIMIT 1)
        ) ORDER BY AComment.created_at) AS A_details
        FROM "article" AS ART
        JOIN "article_comment" AS AComment
            ON ART.id = AComment.id
        WHERE ART.user_id = userId --HERE
        GROUP BY ART.user_id
);

END

$$ LANGUAGE plpgsql VOLATILE;

--& Last errors detailed
CREATE OR REPLACE FUNCTION last_errors_detailed (userId INT)
RETURNS TABLE (E_detailed JSON) AS $$

BEGIN

RETURN QUERY (
SELECT json_agg(
            json_build_object(
            'id', ERR.id,
            'title', ERR.title,
            'abstract', ERR.abstract,
            'error_snippet',ERR.error_snippet,
            'content', ERR.content,
            'created_at', ERR.created_at,
            
            'categories', 
                COALESCE((SELECT JSON_AGG(DISTINCT C.name)
                   FROM "category" AS C
                   JOIN "error_has_category" AS EHCAT
                     ON EHCAT.category_id = C.id
                   JOIN "error" AS ERRC
                     ON ERRC.id = EHCAT.error_id
                   WHERE  ERRC.user_id = ERR.user_id
                   AND ERRC.id = ERR.id), '[]'),
             
            'cheers_count', 3,
           
            'user', 
                (SELECT json_build_object(
                        'id', USE.id, 
                        'username', USE.username, 
                        'title', USE.title,  
                        'profile_pic_url', USE.profile_pic_url)
                  FROM "user" AS USE
                  WHERE USE.id = ERR.user_id
                ),
             
            'comments', 
                  COALESCE((
                      SELECT JSON_AGG(
                        json_build_object(
                        'id', EComm.id,
                        'content', EComm.content,
                        'created_at', EComm.created_at,
                        'user', (json_build_object(
                                'id', UComm.id,
                                'username', UComm.username,
                                'title', UComm.title,
                                'profile_pic_url', UComm.profile_pic_url))) 
                             ORDER BY EComm.created_at DESC)
                        FROM "error_comment" AS EComm
                        JOIN "user" AS UComm
                            ON EComm.user_id = UComm.id
                        WHERE  EComm.error_id = ERR.id
                        ),'[]'),
               
            'user_last_comment_id',
                (SELECT EClast.id --VIEW
                 FROM "error_comment" AS EClast
                 JOIN "user" AS US
                    ON EClast.user_id = US.id
                 WHERE EClast.error_id = ERR.id
                 ORDER BY EClast.created_at DESC
                 LIMIT 1)
        ) ORDER BY EComment.created_at)
        FROM "error" AS ERR
        JOIN "error_comment" AS EComment
            ON ERR.id = EComment.id
        WHERE ERR.user_id = userId --HERE
        GROUP BY ERR.user_id
);

END

$$ LANGUAGE plpgsql VOLATILE;

--& User articles detailed
CREATE OR REPLACE FUNCTION user_articles_detailed (userId INT)
RETURNS TABLE (UA_detailed JSON) AS $$

BEGIN

RETURN QUERY (
SELECT json_agg
                (json_build_object(
                'id', UA.id,
                'title', UA.title,
                'abstract', UA.abstract,
                'user_id', UA.user_id,
                'status_id', UA.status_id,
                'created_at', UA.created_at,
                'categories', 
                    COALESCE((SELECT JSON_AGG(DISTINCT C.name)
                           FROM "category" AS C
                           JOIN "article_has_category" AS AHCAT
                             ON AHCAT.category_id = C.id
                           JOIN "article" AS ARTC
                             ON ARTC.id = AHCAT.article_id
                           WHERE  ARTC.user_id = USA.id
                           AND ARTC.id = UA.id), '[]'),
                'comments_count',
                    COALESCE((SELECT COUNT(UAC.id)
                           FROM "article_comment" AS UAC
                           JOIN "article" AS UArt
                             ON UAC.article_id = UArt.id
                           WHERE   UArt.id = UA.id
                           ), 0),
                'cheers_count', 2    
            ) ORDER BY UA.created_at DESC)
            FROM "article" AS UA
            JOIN "user" AS USA
                ON UA.user_id = USA.id
            WHERE USA.id = userId --HERE
);

END

$$ LANGUAGE plpgsql VOLATILE;

--& User errors detailed
CREATE OR REPLACE FUNCTION user_errors_detailed (userId INT)
RETURNS TABLE (UE_detailed JSON) AS $$

BEGIN

RETURN QUERY (
SELECT json_agg
                (json_build_object(
                'id', ER.id,
                'title', ER.title,
                'abstract', ER.abstract,
                'error_snippet', ER.error_snippet,
                'user_id', ER.user_id,
                'status_id', ER.status_id,
                'created_at', ER.created_at,
                'categories', 
                    COALESCE((SELECT JSON_AGG(DISTINCT C.name)
                           FROM "category" AS C
                           JOIN "error_has_category" AS EHCAT
                             ON EHCAT.category_id = C.id
                           JOIN "error" AS ERRC
                             ON ERRC.id = EHCAT.error_id
                           WHERE  ERRC.user_id = USE.id
                           AND ERRC.id = ER.id), '[]'),
                'comments_count',
                    COALESCE((SELECT COUNT(UEC.id)
                           FROM "error_comment" AS UEC
                           JOIN "error" AS UErr
                             ON UEC.error_id = UErr.id
                           WHERE   UErr.id = ER.id
                           ), 0),
                'cheers_count', 2    
             ) ORDER BY ER.created_at DESC)
            FROM "error" AS ER
            JOIN "user" AS USE
                ON ER.user_id = USE.id
            WHERE USE.id = userId --HERE
);

END

$$ LANGUAGE plpgsql VOLATILE;


--& Full user details
CREATE OR REPLACE FUNCTION user_detailed (userId INT)
RETURNS TABLE (U_detailed JSON) AS $$

BEGIN

RETURN QUERY (
SELECT
json_build_object(
    'id', U.id, 
    'username', U.username, 
    'title', U.title, 
    'presentation', U.presentation, 
    'profile_pic_url', U.profile_pic_url, 
    'linkedin_url', U.linkedin_url,
    'github_url', U.github_url,
    'instagram_url', U.instagram_url,
    'twitter_url', U.twitter_url,
    'portfolio_url', U.portfolio_url,
    
    'last_4_articles_interactions',
            COALESCE((SELECT A_detailed FROM last_articles_detailed(U.id)), '[]'),
    
    'last_4_errors_interactions',    
            COALESCE((SELECT E_detailed FROM last_errors_detailed(U.id)), '[]'),
    
    'user_articles',
            COALESCE((SELECT UA_detailed FROM user_articles_detailed(U.id)), '[]'),
    
    'user_errors',
            COALESCE((SELECT UE_detailed FROM user_errors_detailed(U.id)), '[]')
    ) AS user_details
FROM "user" AS U
WHERE U.id = userId::INT
GROUP BY U.id
);

END

$$ LANGUAGE plpgsql VOLATILE;

EXPLAIN ANALYZE SELECT U_detailed FROM user_detailed (8);