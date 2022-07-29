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
        responses: {
          200: statusCode._200,
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



// const categories = {
//     //~ Fetch all categories
//     get: {
//         tags: ['Category'],
//         summary: 'Récupération de toutes les catégories',
//         responses: {
//             200: {
//                 description: 'Requête réussie',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: categoryProperties,
//                             example: categoryExample
//                         }
//                     }
//                 }
//             },
//             404: statusCode._404
//         }
//     },

//     //~ Create one category
//     post: {
//         tags: ['Category'],
//         summary: `Création d'une catégorie`,
//         responses: {
//             201: {
//                 description: 'Requête réussie et catégorie créée',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: categoryProperties,
//                             example: categoryExample
//                         }
//                     }
//                 }
//             },
//             400: statusCode._400,
//             403: statusCode._403
//         }
//     }
// };

// const oneCategory = {
//     //~ Delete one category
//     delete: {
//         tags: ['Category'],
//         summary: `Suppression d'une catégorie`,
//         parameters: [
//             {
//                 name: 'categoryId',
//                 in: 'path',
//                 required: true,
//                 schema: {
//                     type: 'integer',
//                     example: 1
//                 },
//                 description: `Identifiant d'une catégorie`
//             }
//         ],
//         responses: {
//             200: {
//                 description: 'Requête réussie',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: { message: { type: 'string' } },
//                             example: {
//                                 message: 'La donnée a bien été supprimée'
//                             }
//                         }
//                     }
//                 }
//             },
//             400: statusCode._400,
//             403: statusCode._403,
//             404: statusCode._404
//         }
//     }
// };

// const allCategoriesByArticle = {
//     //~ Fetch all categories by article
//     get: {
//         tags: ['Category'],
//         summary: `Récupération de toutes les catégories d'un article`,
//         parameters: [
//             {
//                 name: 'articleId',
//                 in: 'path',
//                 required: true,
//                 schema: {
//                     type: 'integer',
//                     example: 1
//                 },
//                 description: `Identifiant d'un article`
//             }
//         ],
//         responses: {
//             200: {
//                 description: 'Requête réussie',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: categoryProperties,
//                             example: categoryExample
//                         }
//                     }
//                 }
//             },
//             404: statusCode._404
//         }
//     }
// };

// const allCategoriesByError = {
//     //~ Fetch all categories by error ticket
//     get: {
//         tags: ['Category'],
//         summary: `Récupération de toutes les catégories d'un ticket d'erreur`,
//         parameters: [
//             {
//                 name: 'errorId',
//                 in: 'params',
//                 required: true,
//                 schema: {
//                     type: 'integer',
//                     example: 1
//                 },
//                 description: `Identifiant d'une erreur`
//             }
//         ],
//         responses: {
//             200: {
//                 description: 'Requête réussie',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: categoryProperties,
//                             example: categoryExample
//                         }
//                     }
//                 }
//             },
//             404: statusCode._404
//         }
//     }
// };


