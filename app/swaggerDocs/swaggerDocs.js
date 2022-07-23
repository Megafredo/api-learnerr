//~ MISE EN PLACE DE SWAGGER POUR LA DOC
import swagger from 'swagger-jsdoc';
const swaggerJSDoc = swagger;
import { serve, setup } from 'swagger-ui-express';

import { swaggerDarkCss } from './swaggerUtils/swaggerDark.js';
import { components } from './swaggerUtils/swaggerComponents.js';

//articles
import { articles, oneArticle, articleDrafts, articlesByCategory, articlesByUser, lastestArticles } from './swaggerEndpoints/article.js';
import { articleComments, articlesCommentsById } from './swaggerEndpoints/articleComment.js';

//form
import { signup, signin, signout, refreshToken } from './swaggerEndpoints/auth.js';

//categories
import { categories, oneCategory, allCategoriesByArticle, allCategoriesByError } from './swaggerEndpoints/category.js';

//errors
import { commentsByErrorId, oneCommentByErrorId, allErrorCommentsByUser, solutionOnError } from './swaggerEndpoints/errorComment.js';
import { errors, oneError, errorDrafts, errorsByCategory, errorsByUser, lastestErrors, searchAllErrors } from './swaggerEndpoints/errorTicket.js';

//users
import { users, oneUser, allCommentsByUser } from './swaggerEndpoints/user.js';



const options = {

    definition: {

        // Les informations principales
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: 'Learn(Err)',
            description: `Ici, c'est la super description pour nos expérimentations swaggerDocs.`,
            license: {
                name: 'MIT'
            },
        },

        // Les liens extérieurs
        externalDocs: {
            description : 'Yumicode & Megafredo',
            url: 'http://WorkHard_DreamBig_NeverGiveUp/',
        },
      
        // Tous les serveurs
        servers: [
            {
                url: 'https://api-learnerr.herokuapp.com/',
                description: 'API v1'
            },
            {
                url: 'http://localhost:4100/api/v2',
                description: 'API v2'
            },
            {
                url: 'http://heroku/api/v1',
                description: 'API v1'
            }
        ],
       
        // Tous les chemins ( GET / POST / PATCH / DELETE )
        paths: {

            //~ USERS
            '/users': users,
            '/users/{userId}': oneUser,

            '/users/{userId}/comments': allCommentsByUser,
            
            //~ AUTH
            '/signup': signup,
            '/signin': signin,
            '/signout': signout,
            '/refreshtoken': refreshToken,
            
            //~ ARTICLES
            '/articles': articles,
            '/articles/{articleId}': oneArticle,
            
            '/articles/{articleId}/drafts': articleDrafts,
            '/categories/{categoryId}/articles': articlesByCategory,
            '/users/{userId}/articles': articlesByUser,
            '/articles/last': lastestArticles,
            
            //~ ERROR TICKETS
            '/errors': errors,
            '/errors/{errorId}': oneError,
            
            '/errors/{errorId}/drafts': errorDrafts,
            '/categories/{categoryId}/errors': errorsByCategory,
            '/users/{userId}/errors': errorsByUser,
            '/errors/last': lastestErrors,
            '/errors/search': searchAllErrors,
        
            //~ ARTICLE COMMENTS
            '/articles/{articleId}/comments': articleComments,
            '/articles/{articleId}/comments/{commentId}': articlesCommentsById,

            //~ ERROR COMMENTS
            '/errors/{errorId}/comments': commentsByErrorId,
            '/errors/{errorId}/comments/{commentId}': oneCommentByErrorId,

            '/users/{userId}/error_comments': allErrorCommentsByUser,
            '/errors/{errorId}/solution/{solutionId}': solutionOnError,
            
            //~ CATEGORIES
            '/categories': categories,
            '/categories/{categoryId}': oneCategory,

            '/articles/{articleId}/categories': allCategoriesByArticle,
            '/errors/{errorId}/categories': allCategoriesByError
        
        },
        // Tous les schemas
        components,

        // securitySchemes: {
        //     api_key: {
        //         type: 'apiKey',
        //         name: 'api_key',
        //         in: 'header'
        //     },
        // }
    },

    apis: ['./app/routers/*.js'] 
    // Equivalent à 
    // apis: ['./*/*/*.js']

};

const specs = swaggerJSDoc(options);

const cssOptions = {
    customCss :swaggerDarkCss,
    customSiteTitle: "Learn(Err)"
}

export { specs, serve, setup, cssOptions };
