import { errorTicketsProperties, usersProperties, articlesProperties, articleCommentsProperties,  errorTicketCommentsProperties, categoryProperties } from './swaggerExamples.js';

const components = {
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
        //~ All components
        Users: {
            type: 'object',
            properties: usersProperties
        },
        Articles: {
            type: 'object',
            properties: articlesProperties
        },
        ErrorTickets: {
            type: 'object',
            properties: errorTicketsProperties
        },
        ArticleComments: {
            type: 'object',
            properties: articleCommentsProperties
        },
        ErrorComments: {
            type: 'object',
            properties: errorTicketCommentsProperties
        },
        Category: {
            type: 'object',
            properties: categoryProperties
        }
    }
};

export { components };
