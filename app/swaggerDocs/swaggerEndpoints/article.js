//~  EXAMPLES
import {required as r, example as e, properties as p } from '../swaggerUtils/swaggerExamples.js';
import { statusCode } from '../swaggerUtils/swaggerStatus.js';

const articles = {
    //& ---------------------- createArticle
    post: {
        tags: ['Articles'],
        summary: `Création d'un article`,
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
                        required: r.createArticle,
                        properties: p.createArticle,
                        example: e.createArticle
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
    
    //& ---------------------- fetchAllArticles
    get: {
        tags: ['Articles'],
        summary: `Récupération de tous les articles`,
        responses: {
            200: statusCode._200,
            400: statusCode._400,
            403: statusCode._403,
            404: statusCode._404
        }
    }
};

const oneArticle = {
    //& ---------------------- fetchOneArticle
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
                description: 'Id pour récupérer un article'
            }
        ],
        responses: {
            200: statusCode._200,
            400: statusCode._400,
            403: statusCode._403,
            404: statusCode._404
        }
    },
    //& ---------------------- updateArticle
    patch: {
        tags: ['Articles'],
        summary: `Mise à jour d'un article par son Id`,
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
                description: 'Id pour mettre a jour un article'
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
                        required: r.updateArticle,
                        properties: p.updateArticle,
                        example: e.updateArticle
                    },
                    description: 'Info body pour mettre a jour un article'
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
    //& ---------------------- deleteArticle
    delete: {
        tags: ['Articles'],
        summary: `Suppression d'un article`,
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
                description: 'Id pour supprimer un article'
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

const articlesByCategory = {
    //& ---------------------- fetchAllArticlesByCategory
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
                description: `Id pour récupérer les articles d'une catégorie`
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

const articlesByUser = {
    //& ---------------------- fetchAllArticlesByUser
    get: {
        tags: ['Articles'],
        summary: `Récupération de tous les articles d'un utilisateur`,
        parameters: [
            {
                name: 'categoryId',
                in: 'path',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: `Id pour récupérer les articles d'un utilisateur`
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

const lastestArticles = {
    //& ---------------------- fetchLastestArticles
    post: {
        tags: ['Articles'],
        summary: `Récupération des derniers articles`,
        requestBody: {
            name: 'Body',
            in: 'body',
            required: true,

            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        required: r.lastestArticle,
                        properties: p.lastestArticle,
                        example: e.lastestArticle
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
};

const searchAllArticles = {
    //& ---------------------- searchAllArticles
    post: {
        tags: ['Articles'],
        summary: `Recherche de tous les articles`,
         responses: {
            200: statusCode._200,
            400: statusCode._400,
            403: statusCode._403,
            404: statusCode._404
        }
    }
};

// const articles = {
//     //~ Fetch all articles
//     get: {
//         tags: ['Articles'],
//         summary: 'Récupération de tous les articles',
//         responses: {
//             200: {
//                 description: 'Requête réussie',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: articlesProperties,
//                             example: articleExample
//                         }
//                     }
//                 }
//             },
//             404: statusCode._404
//         }
//     },

//     //~ Create articles
//     post: {
//         tags: ['Articles'],
//         summary: `Création d'un article`,
//         responses: {
//             201: {
//                 description: 'Requête réussie et article créé',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: articlesProperties,
//                             example: articleExample
//                         }
//                     }
//                 }
//             },
//             400: statusCode._400,
//             403: statusCode._403
//         }
//     }
// };

// const oneArticle = {
//     //~ Fetch one article
//     get: {
//         tags: ['Articles'],
//         summary: `Récupération de l'article par son Id`,
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
//                             properties: articlesProperties,
//                             example: articleExample
//                         }
//                     }
//                 }
//             },
//             400: statusCode._400,
//             404: statusCode._404
//         }
//     },

//     //~ Update one article
//     patch: {
//         tags: ['Articles'],
//         summary: `Mise à jour d'un article par son Id`,
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

//     //~ Delete one article
//     delete: {
//         tags: ['Articles'],
//         summary: `Suppression d'un article`,
//         parameters: [
//             {
//                 name: 'articleId',
//                 in: 'params',
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

// const articlesByCategory = {
//     //~ Fetch articles by category
//     get: {
//         tags: ['Articles'],
//         summary: `Récupération de tous les articles d'une catégorie`,
//         parameters: [
//             {
//                 name: 'categoryId',
//                 in: 'path',
//                 required: true,
//                 schema: {
//                     type: 'integer',
//                     example: 1
//                 },
//                 description: `Identifiant d'une catégorie`
//             }
//         ],
//         responses: {
//             200: {
//                 description: 'Requête réussie',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: articlesProperties,
//                             example: articleExample
//                         }
//                     }
//                 }
//             },
//             404: statusCode._404
//         }
//     }
// };

// const articlesByUser = {
//     //~ Fetch all articles by user

//     get: {
//         tags: ['Articles'],
//         summary: `Récupération de tous les articles d'un utilisateur`,
//         parameters: [
//             {
//                 name: 'userId',
//                 in: 'path',
//                 required: true,
//                 schema: {
//                     type: 'integer',
//                     example: 1
//                 },
//                 description: `Identifiant d'un utilisateur`
//             }
//         ],
//         responses: {
//             200: {
//                 description: 'Requête réussie',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: articlesProperties,
//                             example: articleExample
//                         }
//                     }
//                 }
//             },
//             404: statusCode._404
//         }
//     }
// };

// const lastestArticles = {
//     //~ Fetch latest article
//     post: {
//         tags: ['Articles'],
//         summary: 'Récupération des derniers articles',
//         responses: {
//             200: {
//                 description: 'Requête réussie',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: articlesProperties,
//                             example: articleExample
//                         }
//                     }
//                 }
//             },
//             404: statusCode._404
//         }
//     }

// };

// const searchAllArticles = {
//     //~ Search all error tickets
//     post: {
//         tags: ['Articles'],
//         summary: `Recherche de tous les articles`,
//         responses: {
//             200: {
//                 description: 'Requête réussie',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: articlesProperties,
//                             example: articleExample
//                         }
//                     }
//                 }
//             },
//             404: statusCode._404
//         }
//     }
// };

export { articles, oneArticle, articlesByCategory, lastestArticles, articlesByUser, searchAllArticles };
