//~  Importations examples / status codes
import { articleCommentsProperties, articleCommentExample } from '../swaggerUtils/swaggerExamples.js';
import { error400, error403, error404 } from '../swaggerUtils/swaggerStatus.js';

const articleComments = {
    //~ Fetch all comments
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
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: articleCommentsProperties,
                            example: articleCommentExample
                        }
                    }
                }
            },
            404: error404
        }
    },

    //~ Create comment
    post: {
        tags: ['Article comments'],
        summary: `Création d'un commentaire`,
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
            201: {
                description: 'Requête réussie et commentaire créé',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: articleCommentsProperties,
                            example: articleCommentExample
                        }
                    }
                }
            },
            400: error400,
            403: error403
        }
    }
};

const articlesCommentsById = {
    //~ Update comment
    patch: {
        tags: ['Article comments'],
        summary: `Mise à jour des informations d'un commentaire`,
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
        tags: ['Article comments'],
        summary: `Suppression d'un commentaire`,
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

export { articleComments, articlesCommentsById };
