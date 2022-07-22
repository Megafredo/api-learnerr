//~  IMPORTATIONS EXAMPLES / STATUS CODES
import { usersProperties, userExample } from '../swaggerUtils/swaggerExamples.js';
import { error400, error404, error403 } from '../swaggerUtils/swaggerStatus.js';

const users = {
    //~ Fetch all users
    get: {
        tags: ['Users'],
        summary: 'Récupération des utilisateurs',
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: usersProperties,
                            example: userExample
                        }
                    }
                }
            },
            404: error404,
            403: error403
        }
    }
};

const oneUser = {
    //~ Fetch one user
    get: {
        tags: ['Users'],
        summary: `Récupération d'un utilisateur par son Id`,
        parameters: [
            {
                name: 'userId',
                in: 'path',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id pour récupérer un utilisateur'
            }
        ],
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: usersProperties,
                            example: userExample
                        }
                    }
                },
                description: `Requête réussie`
            },

            400: error400,
            404: error404,
            403: error403
        }
    },

    //~ Update one user
    patch: {
        tags: ['Users'],
        summary: `Mise à jour des informations d'un utilisateur`,
        parameters: [
            {
                name: 'userId',
                in: 'path',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id pour mettre à jour un utilisateur'
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
            404: error404,
            403: error403
        }
    },

    //~ Inactivate one user
    put: {
        tags: ['Users'],
        summary: `Désactivation d'un utilisateur`,
        parameters: [
            {
                name: 'userId',
                in: 'path',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id pour désactiver un utilisateur'
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
            404: error404,
            403: error403
        }
    }
};

//~ Fetch all comments from one user
const allCommentsByUser = {
    get: {
        tags: ['Users'],
        summary: `Récupération de tous les commentaires d'un utilisateur`,
        parameters: [
            {
                name: 'userId',
                in: 'path',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: `Id pour récupérer tous les commentaires d'un utilisateur`
            }
        ],
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: usersProperties,
                            example: userExample
                        }
                    }
                }
            },
            404: error404
        }
    }
};

export { users, oneUser, allCommentsByUser };
