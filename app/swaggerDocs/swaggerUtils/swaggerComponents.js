import { errorTicketsProperties, usersProperties, articlesProperties, articleCommentsProperties,  errorTicketCommentsProperties, categoryProperties } from './swaggerExamples.js';

const components = {
    securitySchemes: {
        AccessToken: { // Personnalisable
            type: 'apiKey',
            scheme: 'bearer',
            name: 'Authorization', // ne pas oublier d'écrire Bearer au moment du rajout du token
            bearerFormat: 'JWT',
            in: 'header'
        },

        refreshToken: { // Personnalisable
            type: 'apiKey',
            scheme: 'bearer',
            name: 'Authorization', // ne pas oublier d'écrire Bearer au moment du rajout du token
            bearerFormat: 'JWT',
            in: 'header'
        },
        
    },
    
    schemas: {
        StatusErrors: {
           
            type: 'object',
            properties: {
                code: {
                    type: 'integer',
                },
                message: {
                    type: 'string'
                }
            }
        },
        // //~ All components







        // Users: {
        //     type: 'object',
        //     required: ['email', 'password'],
        //     properties: usersProperties,
        //     securitySchemes: {
        //         bearerAuth: {
        //             type: 'http',
        //             scheme: 'bearer',
        //             bearerFormat: 'JWT',
        //         }
        //     },
        // security: [{
        //     bearerAuth: []
        // }],
        // },
        // Articles: {
        //     type: 'object',
        //     properties: articlesProperties
        // },
        // ErrorTickets: {
        //     type: 'object',
        //     properties: errorTicketsProperties
        // },
        // ArticleComments: {
        //     type: 'object',
        //     properties: articleCommentsProperties
        // },
        // ErrorComments: {
        //     type: 'object',
        //     properties: errorTicketCommentsProperties
        // },
        // Category: {
        //     type: 'object',
        //     properties: categoryProperties
        // }
    }
};

export { components };
