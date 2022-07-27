//~  IMPORTATIONS EXAMPLES / STATUS CODES
//check import all
import { usersProperties, userExample, authSignInExample,authSignInProperties, authSignUpProperties, authSignUpExample, authSignInExampleOk,authSignInPropertiesOk, authSignOutExample, authSignOutProperties, authRefreshTokenExample, authRefreshTokenProperties } from '../swaggerUtils/swaggerExamples.js';
import { status200, status201, status204, error400, error401, error403, error404 } from '../swaggerUtils/swaggerStatus.js';

const signup = {
    //~ Create user
    post: {
        tags: ['Identification'],
        summary: `Création d'un utilisateur`,
        requestBody: 
           { 

            name:'Body',
            in:'body',
            required: true,
          
            content: {
                'application/json': {
                    schema: {
                                    type: 'object',
                                    required: ['username', 'email', 'password', 'passwordConfirm'],
                                    example: authSignUpExample,
                                    properties: authSignUpProperties
                                },
                                description: 'Info body pour générer un utilisateur'
                            
                }
            }
        },


        // parameters: [

        //     {
        //         name:'Username',
        //         in: 'formData',
        //         required: true
        //     },
        //     {
        //         name:'email',
        //         in: 'formData',
        //         required: true
        //     },
        //     {
        //         name:'password',
        //         in: 'formData',
        //         required: true
        //     },
        //     {
        //         name:'passwordConfirm',
        //         in: 'formData',
        //         required: true
        //     }


        //     {
        //         name: 'Body',
        //         in: 'body',
        //         required: true,
        //         schema: {
        //             type: 'object',
        //             required: ['username', 'email', 'password', 'passwordConfirm'],
        //             properties: authSignUpProperties,
        //             example: authSignUpExample
        //         },
        //         description: 'Info body pour générer un utilisateur'
        //     }
        // ],

        responses: {
            201: status201,
            400: error400,
            401: error401
        }
    }
};

const signin = {
    //~ Auth user
    post: {
        tags: ['Identification'],
        summary: `Authentification d'un utilisateur`,

        requestBody: 
           { 

            name:'Body',
            in:'body',
            required: true,
          
            content: {
                'application/json': {
                    schema: {
                                    type: 'object',
                                    required: ['email', 'password'],
                                    example: authSignInExample,
                                    properties: authSignInProperties
                                },
                                description: 'Info body pour connecter un utilisateur'
                            
                }
            }
        },


        responses: {
            200: {
                status200,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: authSignInPropertiesOk,
                            example: authSignInExampleOk
                        }
                    }
                }
            },
            401: error401
        }
    }
};

const signout = {
    //~ Disconnect user
    get: {
        tags: ['Identification'],
        summary: `Déconnexion d'un utilisateur`,
        security: [
            {
                refreshToken: []
             }
        ],
        responses: {
            204: status204,
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
        
        // parameters: [

        //     {
        //         name:'authorization',
        //         in: 'header',
        //         required: true
        //     },
            
        // ],
        security: [
            {
                refreshToken: []
             }
        ],


        responses: {
            200: status200,
            201: {
                description: 'Requête réussie et token mis à jour',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: authRefreshTokenProperties,
                            example: authRefreshTokenExample
                        }
                    }
                }
            },
            400: error400
        }
    }
};

export { signup, signin, signout, refreshToken };
