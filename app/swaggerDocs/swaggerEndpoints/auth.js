//~  IMPORTATIONS EXAMPLES / STATUS CODES
import { example as e, properties as p, required as r } from '../swaggerUtils/swaggerExamples.js';
import { statusCode } from '../swaggerUtils/swaggerStatus.js';


const signup = {
    //& ---------------------- doSignUp
    post: {
        tags: ['Identification'],
        summary: `Création d'un utilisateur`,

        requestBody: {
            name: 'Body',
            in: 'body',
            required: true,

            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        required: r.signUp,
                        properties: p.signUp,
                        example: e.signUp
                    },
                    description: 'Info body pour générer un utilisateur'
                }
            }
        },

        responses: {
            201: statusCode._201,
            400: statusCode._400,
            401: statusCode._401,
            404: statusCode._404
        }
    }
};



const signin = {
    //& ---------------------- doSignIn
    post: {
        tags: ['Identification'],
        summary: `Authentification d'un utilisateur`,

        requestBody: {
            name: 'Body',
            in: 'body',
            required: true,

            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        required: r.signIn,
                        properties: p.signIn,
                        example: e.signIn
                    },
                    description: 'Info body pour connecter un utilisateur'
                }
            }
        },

        responses: {
            200: statusCode._200,
            401: statusCode._401,
            404: statusCode._404
        }
    }
};



const signout = {
    //& ---------------------- doSignOut
    get: {
        tags: ['Identification'],
        summary: `Déconnexion d'un utilisateur`,
        security: [
            {
                RefreshToken: []
            }
        ],
        responses: {
            204: statusCode._204,
            400: statusCode._400,
            404: statusCode._404
        }
    }
};


const refreshToken = {
    //& ---------------------- refreshToken
    post: {
        tags: ['Identification'],
        summary: `Mise à jour du token d'un utilisateur`,

        security: [
            {
                RefreshToken: []
            }
        ],

        responses: {
            201: statusCode._201,
            400: statusCode._400,
            401: statusCode._401,
            403: statusCode._403,
            404: statusCode._404
        }
    }
};

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

// parameters: [

//     {
//         name:'authorization',
//         in: 'header',
//         required: true
//     },

// ],

export { signup, signin, signout, refreshToken };
