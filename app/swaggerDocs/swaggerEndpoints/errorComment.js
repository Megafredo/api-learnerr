//~  IMPORTATIONS EXAMPLES / STATUS CODES
import { errorTicketCommentsProperties, errorTicketCommentExample } from '../swaggerUtils/swaggerExamples.js';
import { error400, error403, error404 } from '../swaggerUtils/swaggerStatus.js';

const commentsByErrorId = {
  //~ Fetch all comments
  get: {
    tags: ['Error comments'],
    summary: 'Récupération de tous les commentaires',
    responses: {
      200: {
        description: 'Requête réussie',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: errorTicketCommentsProperties,
              example: errorTicketCommentExample
            }
          }
        }
      },
      404: error404
    }
  },

  //~ Create comment
  post: {
    tags: ['Error comments'],
    summary: `Création d'un commentaire`,
    responses: {
      201: {
        description: 'Requête réussie et commentaire créé',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: errorTicketCommentsProperties,
              example: errorTicketCommentExample
            }
          }
        }
      },
      400: error400,
      403: error403,
    }
  }
};

const oneCommentByErrorId = {
  //~ Update comment
  patch: {
    tags: ['Error comments'],
    summary: `Mise à jour des informations d'un commentaire`,
    parameters: [
      {
        name: 'errorComment',
        in: 'path',
        required: true,
        schema: {
          type: 'integer',
          example: 1
        },
        description: 'Id pour mettre à jour un commentaire'
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
                message: 'La donnée a bien été modifiée'
              }
            }
          }
        }
      },
      400: error400,
      403: error403,
      404: error404
    }
  },

  //~ Delete comment
  delete: {
    tags: ['Error comments'],
    summary: `Suppression d'un commentaire`,
    parameters: [
      {
        name: 'errorComment',
        in: 'path',
        required: true,
        schema: {
          type: 'integer',
          example: 1
        },
        description: 'Id pour supprimer un commentaire'
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
};

const allErrorCommentsByUser = {
  //~ Fetch all comments
  get: {
    tags: ['Error comments'],
    summary: 'Récupération de tous les commentaires',
    responses: {
      200: {
        description: 'Requête réussie',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: errorTicketCommentsProperties,
              example: errorTicketCommentExample
            }
          }
        }
      },
      404: error404
    }
  }
};

const solutionOnError = {
  //~ Update comments
  patch: {
    tags: ['Error comments'],
    summary: `Mise à jour des informations d'un commentaire`,
    parameters: [
      {
        name: 'errorComment',
        in: 'path',
        required: true,
        schema: {
          type: 'integer',
          example: 1
        },
        description: 'Id pour mettre à jour un commentaire'
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
                message: 'La donnée a bien été modifiée'
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
};

export { commentsByErrorId, oneCommentByErrorId, allErrorCommentsByUser, solutionOnError };
