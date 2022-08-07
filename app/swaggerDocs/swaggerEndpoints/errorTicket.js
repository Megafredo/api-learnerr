//~  Importations examples / status codes
import { required as r, example as e, properties as p } from '../swaggerUtils/swaggerExamples.js';
import { statusCode } from '../swaggerUtils/swaggerStatus.js';


const errors = {
    //& ---------------------- createErrorTicket
    post: {
        tags: ['Error Tickets'],
        summary: `Création d'un ticket d'erreur`,
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
                  required: r.createErrorTicket,
                  properties: p.createErrorTicket,
                  example: e.createErrorTicket
                },
                description: `Info body pour créer un ticket d'erreur`
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
      
    //& ---------------------- fetchAllErrorTickets
    get: {
        tags: ['Error Tickets'],
        summary: `Récupération de tous les tickets d'erreur`,
        responses: {
          200: statusCode._200,
          400: statusCode._400,
          403: statusCode._403,
          404: statusCode._404
        }
      }
}


const oneError = {
    //& ---------------------- fetchOneErrorTicket
    get: {
        tags: ['Error Tickets'],
        summary: `Récupération d'un ticket d'erreur par son Id`,
        parameters: [
            {
                name: 'errorId',
                in: 'path',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: `Identifiant d'un ticket d'erreur`
            }
        ],
        responses: {
          200: statusCode._200,
          400: statusCode._400,
          403: statusCode._403,
          404: statusCode._404
        }
      },

    //& ---------------------- updateErrorTicket
    patch: {
        tags: ['Error Tickets'],
        summary: `Mise à jour des informations d'un ticket d'erreur`,
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
                description: `Identifiant d'un ticket d'erreur`
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
                  required: r.updateErrorTicket,
                  properties: p.updateErrorTicket,
                  example: e.updateErrorTicket
                },
                description: `Info body pour mettre a jour un ticket d'erreur`
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

    //& ---------------------- deleteErrorTicket
    delete: {
        tags: ['Error Tickets'],
        summary: `Suppression d'un ticket d'erreur`,
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
                description: `Identifiant d'un ticket d'erreur`
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


const errorsByCategory = {
    //& ---------------------- fetchAllErrorTicketsByCategory
    get: {
        tags: ['Error Tickets'],
        summary: `Récupération de tous les tickets d'erreur d'une catégorie`,
        parameters: [
            {
                name: 'categoryId',
                in: 'path',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: `Identifiant d'une categorie`
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


const errorsByUser = {
    //& ---------------------- fetchAllErrorTicketsByUser
    get: {
        tags: ['Error Tickets'],
        summary: `Récupération tous les tickets d'erreur d'un utilisateur`,
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
}


const lastestErrors = {
    //& ---------------------- fetchLastestErrorTickets
    post: {
        tags: ['Error Tickets'],
        summary: `Recherche des derniers tickets d'erreur`,
        requestBody: {
            name: 'Body',
            in: 'body',
            required: true,
      
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: r.lastestErrorTickets,
                  properties: p.lastestErrorTickets,
                  example: e.lastestErrorTickets
                },
                description: 'Info body pour récupérer x(limit) articles tout y(offset)'
              }
            }
          },
        responses: {
          200: statusCode._200,
          400: statusCode._400,
          403: statusCode._403,
          404: statusCode._404
        }
      }
}


const searchAllErrors = {
    //& ---------------------- searchAllErrorTickets
    post: {
        tags: ['Error Tickets'],
        summary: `Recherche par mot clé lié aux tickets d'erreur`,
        requestBody: {
            name: 'Body',
            in: 'body',
            required: true,
      
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: r.searchErrorTickets,
                  properties: p.searchErrorTickets,
                  example: e.searchErrorTickets
                },
                description: 'Info body pour récupérer "x" erreur ticket à partir de "y"'
              }
            }
          },
        responses: {
          200: statusCode._200,
          400: statusCode._400,
          403: statusCode._403,
          404: statusCode._404
        }
      }
}


const solutionOnError = {
    //& ---------------------- solutionOnError
    patch: {
        tags: ['Error Tickets'],
        summary: `Mise à jour d'un commentaire d'erreur en solution`,
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
                name: 'solutionId',
                in: 'path',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: `Identifiant d'un commentaire d'erreur`
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
                required: r.updateErrorTicketSolution,
                properties: p.updateErrorTicketSolution,
                example: e.updateErrorTicketSolution
              },
              description: `Info body pour mettre a jour un ticket d'erreur`
            }
          }
        },
        responses: {
          200: statusCode._200,
          400: statusCode._400,
          403: statusCode._403,
          404: statusCode._404
        }
      }
}


export { errors, oneError, errorsByCategory, errorsByUser, lastestErrors, searchAllErrors, solutionOnError };
