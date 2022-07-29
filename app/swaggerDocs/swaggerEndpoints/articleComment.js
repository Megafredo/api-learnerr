//~  Importations examples / status codes
import { required as r, example as e, properties as p } from '../swaggerUtils/swaggerExamples.js';
import { statusCode } from '../swaggerUtils/swaggerStatus.js';

const articleComments = {
  //& ---------------------- createArticleComment
  post: {
    tags: ['Article comments'],
    summary: `Création d'un commentaire`,
    security: [
      {
        AccessToken: []
      }
    ],
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
    requestBody: {
      name: 'Body',
      in: 'body',
      required: true,

      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: r.createArticleComment,
            properties: p.createArticleComment,
            example: e.createArticleComment
          },
          description: 'Info body pour générer un utilisateur'
        }
      }
    },
    responses: {
      200: statusCode._200,
      400: statusCode._400,
      403: statusCode._403,
      404: statusCode._404
    }
  },

  //& ---------------------- fetchAllArticleComments
  get: {
    tags: ['Article comments'],
    summary: 'Récupération de tous les commentaires',
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
};

const articlesCommentsById = {
  //& ---------------------- updateArticleComment
  patch: {
    tags: ['Article comments'],
    summary: `Mise à jour d'un commentaire`,
    security: [
      {
        AccessToken: []
      }
    ],
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
      },
      {
        name: 'commentId',
        in: 'path',
        required: true,
        schema: {
          type: 'integer',
          example: 1
        },
        description: `Identifiant d'un commentaire`
      }
    ],
    responses: {
      200: statusCode._200,
      400: statusCode._400,
      403: statusCode._403,
      404: statusCode._404
    }
  },
  //& ---------------------- deleteArticleComment
  delete: {
    tags: ['Article comments'],
    summary: `Suppression d'un commentaire`,
    security: [
      {
        AccessToken: []
      }
    ],
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
      },
      {
        name: 'commentId',
        in: 'path',
        required: true,
        schema: {
          type: 'integer',
          example: 1
        },
        description: `Identifiant d'un commentaire`
      }
    ],
    responses: {
      200: statusCode._200,
      400: statusCode._400,
      403: statusCode._403,
      404: statusCode._404
    }
  }
};

const articlesCommentsByUser = {
  //& ---------------------- fetchAllArticleCommentsByUser
  get: {
    tags: ['Article comments'],
    summary: `Récupération de tous les commentaires d'un article par l'id d'un utilisateur`,
    security: [
      {
        AccessToken: []
      }
    ],
    parameters: [
      {
        name: 'userId',
        in: 'path',
        required: true,
        schema: {
          type: 'integer',
          example: 1
        },
        description: `Identifiant d'un utilisateur`
      }
    ],
    responses: {
      200: statusCode._200,
      400: statusCode._400,
      403: statusCode._403,
      404: statusCode._404
    }
  }
};

// const articleComments = {
//     //~ Fetch all comments
//     get: {
//         tags: ['Article comments'],
//         summary: 'Récupération de tous les commentaires',
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
//                             properties: articleCommentsProperties,
//                             example: articleCommentExample
//                         }
//                     }
//                 }
//             },
//             404: statusCode._404
//         }
//     },

//     //~ Create comment
//     post: {
//         tags: ['Article comments'],
//         summary: `Création d'un commentaire`,
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
//             201: {
//                 description: 'Requête réussie et commentaire créé',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: articleCommentsProperties,
//                             example: articleCommentExample
//                         }
//                     }
//                 }
//             },
//             400: statusCode._400,
//             403: statusCode._403
//         }
//     }
// };

// const articlesCommentsById = {
//     //~ Update comment
//     patch: {
//         tags: ['Article comments'],
//         summary: `Mise à jour des informations d'un commentaire`,
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
//             },
//             {
//                 name: 'commentId',
//                 in: 'path',
//                 required: true,
//                 schema: {
//                     type: 'integer',
//                     example: 1
//                 },
//                 description: `Identifiant d'un commentaire`
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
//                                 message: 'La donnée a bien été modifiée'
//                             }
//                         }
//                     }
//                 }
//             },
//             400: statusCode._400,
//             403: statusCode._403,
//             404: statusCode._404
//         }
//     },

//     //~ Delete comment
//     delete: {
//         tags: ['Article comments'],
//         summary: `Suppression d'un commentaire`,
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
//             },
//             {
//                 name: 'commentId',
//                 in: 'path',
//                 required: true,
//                 schema: {
//                     type: 'integer',
//                     example: 1
//                 },
//                 description: `Identifiant d'un commentaire`
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

export { articleComments, articlesCommentsById, articlesCommentsByUser };
