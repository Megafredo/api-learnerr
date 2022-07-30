//~  Importations examples / status codes
import { required as r, example as e, properties as p } from '../swaggerUtils/swaggerExamples.js';
import { statusCode } from '../swaggerUtils/swaggerStatus.js';



const categories = {

    //& ---------------------- createCategory
    post: {
        tags: ['Category'],
        summary: `Création d'une catégorie`,
        security: [
            {
              AccessToken: []
            }
          ],

          requestBody: {
            name: 'Body',
            in: 'body',
            required: true,
      
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: r.createCategory,
                  properties: p.createCategory,
                  example: e.createCategory
                },
                description: 'Info body pour récupérer x(limit) articles tout y(offset)'
              }
            }
          },
        responses: {
          201: statusCode._201,
          400: statusCode._400,
          403: statusCode._403,
          404: statusCode._404
        }
      },

    //& ---------------------- fetchAllCategories
    get: {
        tags: ['Category'],
        summary: `Récupération de toutes les catégories`,
        responses: {
          200: statusCode._200,
          400: statusCode._400,
          403: statusCode._403,
          404: statusCode._404
        }
      }
     
  
      
      
    }
    
const oneCategory = {
    //& ---------------------- deleteCategory
    delete: {
        tags: ['Category'],
        summary: `Suppression d'une catégorie`,
        security: [
            {
              AccessToken: []
            }
          ],
          parameters: [
            {
                name: 'categoryId',
                in: 'path',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: `Identifiant d'une catégorie`
            }
        ],
        responses: {
          200: statusCode._200,
          400: statusCode._400,
          403: statusCode._403,
          404: statusCode._404
        }
      }
}

const allCategoriesByArticle = {
     //& ---------------------- fetchAllCategoriesByArticle
     get: {
        tags: ['Category'],
        summary: `Récupération de toutes les catégories d'un article`,
        parameters: [
            {
                name: 'articleId',
                in: 'path',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: `Identifiant d'un article`
            }
        ],
        responses: {
          200: statusCode._200,
          400: statusCode._400,
          403: statusCode._403,
          404: statusCode._404
        }
      }
}

const allCategoriesByError = {
        //& ---------------------- fetchAllCategoriesByErrorTicket
        get: {
            tags: ['Category'],
            summary: `Récupération de toutes les catégories d'un ticket d'erreur`,
            parameters: [
                {
                    name: 'errorId',
                    in: 'path',
                    required: true,
                    schema: {
                        type: 'integer',
                        example: 1
                    },
                    description: `Identifiant d'une erreur`
                }
            ],
            responses: {
              200: statusCode._200,
              400: statusCode._400,
              403: statusCode._403,
              404: statusCode._404
            }
          }
}



export { categories, oneCategory, allCategoriesByArticle, allCategoriesByError };




