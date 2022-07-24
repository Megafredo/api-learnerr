//~  IMPORTATIONS EXAMPLES / STATUS CODES
import { errorTicketsProperties, errorTicketExample } from '../swaggerUtils/swaggerExamples.js';
import { error400, error404, error403 } from '../swaggerUtils/swaggerStatus.js';

const errors = {
    //~ Fetch all error tickets
    get: {
        tags: ['Errors'],
        summary: `Récupération de tous les tickets d'erreur`,
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: errorTicketsProperties,
                            example: errorTicketExample
                        }
                    }
                }
            },
            404: error404
        }
    },

    //~ Create error ticket
    post: {
        tags: ['Errors'],
        summary: `Création d'une erreur`,
        responses: {
            201: {
                description: `Requête réussie et ticket d'erreur créé`,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: errorTicketsProperties,
                            example: errorTicketExample
                        }
                    }
                }
            },
            400: error400,
            403: error403
        }
    }
};

const oneError = {
    //~ Fetch one error ticket
    get: {
        tags: ['Errors'],
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
                description: `Id pour récupérer un ticket d'erreur`
            }
        ],
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: errorTicketsProperties,
                            example: errorTicketExample
                        }
                    }
                }
            },
            400: error400,
            404: error404
        }
    },

    //~ Update one error ticket
    patch: {
        tags: ['Errors'],
        summary: `Mise à jour des informations d'un ticket d'erreur`,
        parameters: [
            {
                name: 'errorId',
                in: 'path',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: `Id pour mettre à jour un ticket d'erreur`
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

    //~ Delete one error ticket
    delete: {
        tags: ['Errors'],
        summary: `Suppression d'un ticket d'erreur`,
        parameters: [
            {
                name: 'errorId',
                in: 'path',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id pour supprimer une erreur'
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


const errorsByCategory = {
    //~ Fetch all Error tickets by category
    get: {
        tags: ['Errors'],
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
                description: `Id pour récupérer tous les tickets d'erreur d'une catégorie`
            }
        ],
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: errorTicketsProperties,
                            example: errorTicketExample
                        }
                    }
                }
            },
            404: error404
        }
    }
};

const errorsByUser = {
    //~ Fetch all error tickets by user
    get: {
        tags: ['Errors'],
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
                description: `Id pour récupérer tous les tickets d'erreur d'un utilisateur`
            }
        ],
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: errorTicketsProperties,
                            example: errorTicketExample
                        }
                    }
                }
            },
            403: error403,
            404: error404
        }
    }
};

const lastestErrors = {
    //~ fetch lastest error tickets
    get: {
        tags: ['Errors'],
        summary: `Recherche des derniers tickets d'erreur`,
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: errorTicketsProperties,
                            example: errorTicketExample
                        }
                    }
                }
            },
            404: error404
        }
    }
};

const searchAllErrors = {
    //~ Search all error tickets
    get: {
        tags: ['Errors'],
        summary: `Recherche de tous les tickets d'erreur`,
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: errorTicketsProperties,
                            example: errorTicketExample
                        }
                    }
                }
            },
            404: error404
        }
    }
};

export { errors, oneError, errorsByCategory, errorsByUser, lastestErrors, searchAllErrors };
