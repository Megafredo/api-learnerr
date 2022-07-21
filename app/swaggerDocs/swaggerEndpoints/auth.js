//~  IMPORTATIONS EXAMPLES / STATUS CODES
import { usersProperties, userExample } from '../swaggerUtils/swaggerExamples.js';
import { error400, error403, error404 } from '../swaggerUtils/swaggerStatus.js';

const signup = {
       //~ Create user
    post: {
        tags: ['Identification'],
        summary: `Création d'un utilisateur`,
        responses: {
            201: {
                description: 'Requête réussie et utilisateur créé',
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
            400: error400
        }
    }
};

const signin = {
       //~ Auth user
    post: {
        tags: ['Identification'],
        summary: `Authentification d'un utilisateur`,
        responses: {
            201: {
                description: 'Requête réussie et utilisateur créé',
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
            400: error400
        }
    }
};

const signout = {
       //~ Disconnect user
    get: {
        tags: ['Identification'],
        summary: `Déconnexion d'un utilisateur`,
        responses: {
            201: {
                description: 'Requête réussie et utilisateur créé',
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
            400: error400,
            403: error403,
            404: error404
        }
    }
};

const refreshToken = {
    //~ Mise à jour du token d'un utilisateur
    post: {
        tags: ['Identification'],
        summary: `Mise à jour du token d'un utilisateur`,
        responses: {
            201: {
                description: 'Requête réussie et token mis à jour',
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
            400: error400
        }
    }
};

export { signup, signin, signout, refreshToken };