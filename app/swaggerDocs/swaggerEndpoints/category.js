//~  IMPORTATIONS EXAMPLES / STATUS CODES
import { categoryProperties, categoryExample } from '../swaggerUtils/swaggerExamples.js';
import { error400, error403, error404 } from '../swaggerUtils/swaggerStatus.js';

const categories = {
  //~ Fetch all categories
  get: {
    tags: ['Category'],
    summary: 'Récupération de toutes les catégories',
    responses: {
      200: {
        description: 'Requête réussie',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: categoryProperties,
              example: categoryExample
            }
          }
        }
      },
      404: error404
    }
  },

  //~ Create one category
  post: {
    tags: ['Category'],
    summary: `Création d'une catégorie`,
    responses: {
      201: {
        description: 'Requête réussie et catégorie créée',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: categoryProperties,
              example: categoryExample
            }
          }
        }
      },
      400: error400,
      403: error403
    }
  }
};


const oneCategory = {
//~ Delete one category
    delete: {
        tags: ['Category'],
        summary: `Suppression d'une catégorie`,
        parameters: [
          {
            name: 'categoryId',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              example: 1
            },
            description: 'Id pour supprimer une catégorie'
          }
        ],
        responses: {
          200: {
            description: 'Requête réussie',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: { message: { type: 'string' } },
                  example: {
                    message: 'La donnée a bien été supprimée'
                  }
                }
              }
            }
          },
          400: error400,
          403: error403,
          404: error404
        }
      }
}



const allCategoriesByArticle = {
  //~ Fetch all categories by article
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
        description: `Id pour récupérer toutes les catégories d'un article`
      }
    ],
    responses: {
      200: {
        description: 'Requête réussie',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: categoryProperties,
              example: categoryExample
            }
          }
        }
      },
      404: error404
    }
  }
};

const allCategoriesByError = {
    //~ Fetch all categories by error ticket
    get: {
        tags: ['Category'],
    summary: `Récupération de toutes les catégories d'un ticket d'erreur`,
    parameters: [
      {
        name: 'errorId',
        in: 'params',
        required: true,
        schema: {
          type: 'integer',
          example: 1
        },
        description: `Id pour récupérer toutes les catégories d'un ticket d'erreur`
      }
    ],
        responses: {
          200: {
            description: 'Requête réussie',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: categoryProperties,
                  example: categoryExample
                }
              }
            }
          },
          404: error404
        }
      }
};

export { categories, oneCategory, allCategoriesByArticle, allCategoriesByError };
