//~  IMPORTATIONS EXAMPLES / STATUS CODES
import {required as r, example as e, properties as p } from '../swaggerUtils/swaggerExamples.js';
import { statusCode } from '../swaggerUtils/swaggerStatus.js';

const users = {
    //& ---------------------- fetchAllUsers
    get: {
        tags: ['Users'],
        summary: 'Récupération de tous les utilisateurs',

        responses: {
            200: statusCode._200,
            404: statusCode._404
        }
    }
};

const oneUser = {
    //& ---------------------- fetchOneUser
    get: {
        tags: ['Users'],
        summary: `Récupération d'un utilisateur par son id`,
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
                description: 'Id pour récupérer un utilisateur'
            }
        ],
        responses: {
            200: statusCode._200,
            400: statusCode._400,
            403: statusCode._403,
            404: statusCode._404
        }
    },

    //& ---------------------- updateUser
    patch: {
        tags: ['Users'],
        summary: `Mise à jour des informations d'un utilisateur`,
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
                    example: 11
                },
                description: 'Id pour récupérer un utilisateur'
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
                        properties: p.updateUser,
                        example: e.updateUser
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

    //& ---------------------- deleteUser
    delete: {
        tags: ['Users'],
        summary: `Suppression d'un utilisateur`,
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
                description: 'Id pour supprimer un utilisateur'
            }
        ],
        responses: {
            200: statusCode._200,
            400: statusCode._400,
            403: statusCode._403,
            404: statusCode._404
        }
    },

    //& ---------------------- inactivateUser
    put: {
        tags: ['Users'],
        summary: `Désactivation / Activation d'un utilisateur`,
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
                description: 'Id pour désactiver / activer un utilisateur'
            }
        ],
        requestBody: {
            name: 'Body',
            in: 'body',
            required: true,

            content: {
                'application/json': {
                    schema: {
                        type: 'boolean',
                        properties: p.inactivateUser,
                        example: e.inactivateUser
                    },
                    description: 'Info body pour désactiver / activer un utilisateur'
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

const panelUser = {
    //& ---------------------- fetchPanelUser
    get: {
        tags: ['Users'],
        summary: `Récupération des informations pour le panel d'un utilisateur`,
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
                description: `Id pour récupérer les informations d'un utilisateur`
            }
        ],
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: p.panelUser
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

// const users = {
//     //~ Fetch all users
//     get: {
//         tags: ['Users'],
//         summary: 'Récupération des utilisateurs',
//         responses: {
//             200: {
//                 description: 'Requête réussie',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: usersProperties,
//                             example: userExample
//                         }
//                     }
//                 }
//             },
//             404: statusCode._404,
//             403: statusCode._403
//         }
//     }
// };

// const oneUser = {
//     //~ Fetch one user
//     get: {
//         tags: ['Users'],
//         summary: `Récupération d'un utilisateur par son Id`,
//         security: [
//             {
//                 AccessToken: []
//              }
//         ],
//         parameters: [
//             {
//                 name: 'userId',
//                 in: 'path',
//                 required: true,
//                 schema: {
//                     type: 'integer',
//                     example: 1
//                 },
//                 description: 'Id pour récupérer un utilisateur'
//             }
//         ],

//         responses: {
//             200: {
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: usersProperties,
//                             example: userExample
//                         }
//                     }
//                 },
//                 description: `Requête réussie`
//             },

//             400: statusCode._400,
//             404: statusCode._404,
//             403: statusCode._403
//         }
//     },

//     //~ Update one user
//     patch: {
//         tags: ['Users'],
//         summary: `Mise à jour des informations d'un utilisateur`,
//         security: [
//             {
//                 AccessToken: []
//              }
//         ],
//         parameters: [
//             {
//                 name: 'userId',
//                 in: 'path',
//                 required: true,
//                 schema: {
//                     type: 'integer',
//                     example: 1
//                 },
//                 description: 'Id pour mettre à jour un utilisateur'
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
//             404: statusCode._404,
//             403: statusCode._403
//         }
//     },

//     //~ Inactivate one user
//     put: {
//         tags: ['Users'],
//         summary: `Désactivation d'un utilisateur`,
//         security: [
//             {
//                 AccessToken: []
//              }
//         ],
//         parameters: [
//             {
//                 name: 'userId',
//                 in: 'path',
//                 required: true,
//                 schema: {
//                     type: 'integer',
//                     example: 1
//                 },
//                 description: 'Id pour désactiver un utilisateur'
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
//             404: statusCode._404,
//             403: statusCode._403
//         }
//     },

//      //~ Delete one User
//      delete: {
//         tags: ['Users'],
//         summary: `Suppression d'un utilisateur`,
//         security: [
//             {
//                 AccessToken: []
//              }
//         ],
//         parameters: [
//             {
//                 name: 'userId',
//                 in: 'path',
//                 required: true,
//                 schema: {
//                     type: 'integer',
//                     example: 1
//                 },
//                 description: 'Id pour supprimer un utilisateur'
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

// //~ Fetch all comments from one user
// const allCommentsByUser = {
//     get: {
//         tags: ['Users'],
//         summary: `Récupération de tous les commentaires d'un utilisateur`,
//         parameters: [
//             {
//                 name: 'userId',
//                 in: 'path',
//                 required: true,
//                 schema: {
//                     type: 'integer',
//                     example: 1
//                 },
//                 description: `Id pour récupérer tous les commentaires d'un utilisateur`
//             }
//         ],
//         responses: {
//             200: {
//                 description: 'Requête réussie',
//                 content: {
//                     'application/json': {
//                         schema: {
//                             type: 'object',
//                             properties: usersProperties,
//                             example: userExample
//                         }
//                     }
//                 }
//             },
//             404: statusCode._404
//         }
//     }
// };

export { users, oneUser, panelUser };
