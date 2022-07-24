//~  EXAMPLES
import { articleExample, articlesProperties } from '../swaggerUtils/swaggerExamples.js';
import { error400, error404, error403 } from '../swaggerUtils/swaggerStatus.js';

const articles = {
    //~ Fetch all articles
    get: {
        tags: ['Articles'],
        summary: 'Récupération de tous les articles',
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: articlesProperties,
                            example: articleExample
                        }
                    }
                }
            },
            404: error404
        }
    },

    //~ Create articles
    post: {
        tags: ['Articles'],
        summary: `Création d'un article`,
        responses: {
            201: {
                description: 'Requête réussie et article créé',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: articlesProperties,
                            example: articleExample
                        }
                    }
                }
            },
            400: error400,
            403: error403
        }
    }
};

const oneArticle = {
    //~ Fetch one article
    get: {
        tags: ['Articles'],
        summary: `Récupération de l'article par son Id`,
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
                            properties: articlesProperties,
                            example: articleExample
                        }
                    }
                }
            },
            400: error400,
            404: error404
        }
    },

    //~ Update one article
    patch: {
        tags: ['Articles'],
        summary: `Mise à jour d'un article par son Id`,
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

    //~ Delete one article
    delete: {
        tags: ['Articles'],
        summary: `Suppression d'un article`,
        parameters: [
            {
                name: 'articleId',
                in: 'params',
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


const articlesByCategory = {
    //~ Fetch articles by category
    get: {
        tags: ['Articles'],
        summary: `Récupération de tous les articles d'une catégorie`,
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
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: articlesProperties,
                            example: articleExample
                        }
                    }
                }
            },
            404: error404
        }
    }
};

const articlesByUser = {
    //~ Fetch all articles by user

    get: {
        tags: ['Articles'],
        summary: `Récupération de tous les articles d'un utilisateur`,
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
                            properties: articlesProperties,
                            example: articleExample
                        }
                    }
                }
            },
            404: error404
        }
    }
};

const lastestArticles = {
    //~ Fetch latest article
    get: {
        tags: ['Articles'],
        summary: 'Récupération des derniers articles',
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: articlesProperties,
                            example: articleExample
                        }
                    }
                }
            },
            404: error404
        }
    }
};

export { articles, oneArticle, articleDrafts, articlesByCategory, lastestArticles, articlesByUser };
