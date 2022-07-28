//~  IMPORTATIONS EXAMPLES / STATUS CODES
import { errorTicketCommentsProperties, errorTicketCommentExample } from '../swaggerUtils/swaggerExamples.js';
import { statusCode } from '../swaggerUtils/swaggerStatus.js';

const commentsByErrorId = {
    //~ Fetch all comments
    get: {
        tags: ['Error comments'],
        summary: 'Récupération de tous les commentaires',
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
            404: statusCode._404
        }
    },

    //~ Create comment
    post: {
        tags: ['Error comments'],
        summary: `Création d'un commentaire`,
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
            400: statusCode._400,
            403: statusCode._403
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
            400: statusCode._400,
            403: statusCode._403,
            404: statusCode._404
        }
    },

    //~ Delete comment
    delete: {
        tags: ['Error comments'],
        summary: `Suppression d'un commentaire`,
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
            400: statusCode._400,
            403: statusCode._403,
            404: statusCode._404
        }
    }
};

const allErrorCommentsByUser = {
    //~ Fetch all comments
    get: {
        tags: ['Error comments'],
        summary: 'Récupération de tous les commentaires',
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
            404: statusCode._404
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
            400: statusCode._400,
            403: statusCode._403,
            404: statusCode._404
        }
    }
};

export { commentsByErrorId, oneCommentByErrorId, allErrorCommentsByUser, solutionOnError };
