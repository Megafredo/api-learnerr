//~  Importations examples / status codes
import { required as r, example as e, properties as p } from '../swaggerUtils/swaggerExamples.js';
import { statusCode } from '../swaggerUtils/swaggerStatus.js';

const commentsByErrorId = {
  //& ---------------------- createErrorComment
  post: {
    tags: ['Error comments'],
    summary: `Création d'un commentaire`,
    security: [
      {
        AccessToken: []
      }
    ],
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
    requestBody: {
      name: 'Body',
      in: 'body',
      required: true,

      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: r.createErrorComment,
            properties: p.createErrorComment,
            example: e.createErrorComment
          },
          description: `Info body pour créer un commentaire d'erreur`
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
  //& ---------------------- fetchAllErrorComments
  get: {
    tags: ['Error comments'],
    summary: `Récupération de tous les commentaires`,
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
};

const oneCommentByErrorId = {
  //& ---------------------- updateErrorComment
  patch: {
    tags: ['Error comments'],
    summary: `Mise à jour des informations d'un commentaire`,
    security: [
      {
        AccessToken: []
      }
    ],
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
      },
      {
        name: 'commentId',
        in: 'path',
        required: true,
        schema: {
          type: 'integer',
          example: 1
        },
        description: `Identifiant d'un commentaire d'erreur`
      }
    ],
    responses: {
      200: statusCode._200,
      400: statusCode._400,
      403: statusCode._403,
      404: statusCode._404
    }
  },
  //& ---------------------- deleteErrorComment
  delete: {
    tags: ['Error comments'],
    summary: `Suppression d'un commentaire`,
    security: [
      {
        AccessToken: []
      }
    ],
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
        },
        {
            name: 'commentId',
            in: 'path',
            required: true,
            schema: {
                type: 'integer',
                example: 1
            },
            description: `Identifiant d'un commentaire d'erreur`
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

const allErrorCommentsByUser = {
  //& ---------------------- fetchAllErrorCommentsByUser
  get: {
    tags: ['Error comments'],
    summary: `Récupération de tous les commentaires d'un utilisateur`,
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

export { commentsByErrorId, oneCommentByErrorId, allErrorCommentsByUser };

