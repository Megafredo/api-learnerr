import { required as r, example as e, properties as p, tableSql, schemaJoi as s } from './swaggerExamples.js';

const components = {
    //~ --------------------- Security token
    securitySchemes: {
        // Authorization

        // ApiKeyAuth:  {
        //     type: 'apiKey',
        //     in: 'header',
        //     name: 'X-API-KEY'
        // },

        AccessToken: {
            // Personnalisable
            type: 'apiKey',
            scheme: 'bearer',
            name: 'Authorization', // ne pas oublier d'écrire Bearer au moment du rajout du token
            bearerFormat: 'JWT',
            in: 'header'
        },

        RefreshToken: {
            // Personnalisable
            type: 'apiKey',
            scheme: 'bearer',
            name: 'Authorization', // ne pas oublier d'écrire Bearer au moment du rajout du token
            bearerFormat: 'JWT',
            in: 'header'
        }
    },

    //~ --------------------- All Schemas
    schemas: {
        ______________________TABLE_SQL________________________: {},

        //& Tables SQL
        TableSql_User: { properties: tableSql.user },
        TableSql_Article: { properties: tableSql.article },
        TableSql_ErrorTicket: { properties: tableSql.error },
        TableSql_Article_Comment: { properties: tableSql.articleComment },
        TableSql_Error_Comment: { properties: tableSql.errorComment },
        TableSql_Role: { properties: tableSql.role },
        TableSql_Bad_Word: { properties: tableSql.badWord },
        TableSql_Status: { properties: tableSql.status },
        TableSql_Category: { properties: tableSql.category },

        ______________________SCHEMAS_JOI______________________: {},

        //& Schema Joi User
        SchemaJoi_SignIn_User: { required: r.signIn, properties: s.signIn },
        SchemJoi_SignUp_User: { required: r.signUp, properties: s.signUp },
        SchemaJoi_Update_User: { properties: s.updateUser },
        SchemaJoi_inactivate_User: { required: r.inactivateUser, properties: s.inactivateUser },

        //& Schema Joi Article
        SchemaJoi_Create_Article: { required: r.createArticle, properties: s.createArticle },
        SchemaJoi_Update_Article: { required: r.updateArticle, properties: s.updateArticle },

        //& Schema Joi ErrorTicket
        SchemaJoi_Create_ErrorTicket: { required: r.createErrorTicket, properties: s.createErrorTicket },
        SchemaJoi_Update_ErrorTicket: { required: r.updateErrorTicket, properties: s.updateErrorTicket },

        //& Schema Joi ArticleComment
        SchemaJoi_Article_Comment: { required: r.articleComment, properties: s.articleComment },

        //& Schema Joi ErrorComment
        SchemaJoi_Error_Comment: { required: r.errorComment, properties: s.errorComment },

        //& Schema Joi Category
        SchemaJoi_Create_Category: { required: r.createCategory, properties: s.createCategory },

        ______________________INFO_RETURN______________________: {},

        //& INFO USER
        //--------------------
        //& INFO fetchAllUsers
        //& INFO fetchOneUser
        //& INFO doSignIn
        //& INFO fetchPanelUser

        //& INFO ARTICLE
        //--------------------
        //& INFO fetchAllArticles
        //& INFO fetchOneArticle
        //& INFO fetchAllArticlesByCategory
        //& INFO fetchAllArticlesByUser
        //& INFO fetchLastestArticles
        //& INFO searchAllArticles

        //& INFO ERROR TICKET
        //--------------------
        //& INFO fetchAllErrorTickets
        //& INFO fetchOneErrorTicket
        //& INFO fetchAllErrorTicketsByCategory
        //& INFO fetchAllErrorTicketsByUser
        //& INFO fetchLastestErrorTickets
        //& INFO searchAllErrorTickets

        //& INFO ARTICLE COMMENT
        //--------------------
        //& INFO fetchAllArticleComments
        //& INFO fetchAllArticleCommentsByUser

        //& INFO ERROR COMMENT
        //--------------------
        //& INFO fetchAllErrorComments
        //& INFO fetchAllErrorCommentsByUser

        //& INFO CATEGORY
        //--------------------
        //& INFO fetchAllCategories
        //& INFO fetchAllCategoriesByArticle
        //& INFO fetchAllCategoriesByErrorTicket



        //& Class ErrorHandler
        StatusCode_Errors: {
            type: 'object',
            properties: {
                message: {
                    type: 'string'
                },
                code: {
                    type: 'integer'
                }
            }
        }

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
