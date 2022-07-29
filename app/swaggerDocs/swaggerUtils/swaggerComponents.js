import { required as r, example as e, properties as p, tableSql, schemaJoi as s, infoReturn as i } from './swaggerExamples.js';

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
    TABLE_SQL: {
      type: 'object',
      properties: {
        //& Tables SQL
        User: { properties: tableSql.user },
        Article: { properties: tableSql.article },
        ErrorTicket: { properties: tableSql.error },
        Article_Comment: { properties: tableSql.articleComment },
        Error_Comment: { properties: tableSql.errorComment },
        Role: { properties: tableSql.role },
        Bad_Word: { properties: tableSql.badWord },
        Status: { properties: tableSql.status },
        Category: { properties: tableSql.category }
      }
    },

    SCHEMAS_JOI: {
      type: 'object',
      properties: {
        //& Schema Joi User
        User: {
          type: 'object',
          properties: {
            SignIn_User: { required: r.signIn, properties: s.signIn },
            ignUp_User: { required: r.signUp, properties: s.signUp },
            Update_User: { properties: s.updateUser },
            inactivate_User: { required: r.inactivateUser, properties: s.inactivateUser }
          }
        },

        //& Schema Joi Article
        Article: {
          type: 'object',
          properties: {
            Create_Article: { required: r.createArticle, properties: s.createArticle },
            Update_Article: { required: r.updateArticle, properties: s.updateArticle }
          }
        },
        //& Schema Joi ErrorTicket
        ErrorTicket: {
          type: 'object',
          properties: {
            Create_ErrorTicket: { required: r.createErrorTicket, properties: s.createErrorTicket },
            Update_ErrorTicket: { required: r.updateErrorTicket, properties: s.updateErrorTicket }
          }
        },
        //& Schema Joi ArticleComment
        ArticleComment: {
          type: 'object',
          properties: {
            Article_Comment: { required: r.articleComment, properties: s.articleComment }
          }
        },
        //& Schema Joi ErrorComment
        ErrorComment: {
          type: 'object',
          properties: {
            Error_Comment: { required: r.errorComment, properties: s.errorComment }
          }
        },
        //& Schema Joi Category
        Category: {
          type: 'object',
          properties: {
            Create_Category: { required: r.createCategory, properties: s.createCategory }
          }
        }
      }
    },

    INFO_RETURN: {
      type: 'object',
      properties: {
        //& INFO USER
        //--------------------
        User: {
          type: 'object',
          properties: {
            //& INFO fetchAllUsers
            AllUsers: { properties: i.allUsers },
            //& INFO fetchOneUser
            OneUser: { properties: i.oneUser },
            //& INFO doSignIn
            SignInUser: { properties: i.signInUser },
            //& INFO fetchPanelUser
            PanelUser: { properties: i.panelUser }
          }
        },

        //& INFO ARTICLE
        //--------------------
        Article: {
          type: 'object',
          properties: {
            //& INFO fetchAllArticles
            AllArticles: { properties: i.allArticles },
            //& INFO fetchOneArticle
            OneArticle: { properties: i.oneArticle },
            //& INFO fetchAllArticlesByCategory
            AllArticlesByCategory: { properties: i.allArticlesByCategory },
            //& INFO fetchAllArticlesByUser
            AllArticlesByUser: { properties: i.allArticlesByUser },
            //& INFO fetchLastestArticles
            LastestArticles: { properties: i.lastestArticles },
            //& INFO searchAllArticles
            SearchArticles: { properties: i.searchArticle }
          }
        },

        //& INFO ERROR TICKET
        //--------------------
        ErrorTicket: {
          type: 'object',
          properties: {
            //& INFO fetchAllErrorTickets
            AllErrorTickets: {},
            //& INFO fetchOneErrorTicket
            OneErrorTicket: {},
            //& INFO fetchAllErrorTicketsByCategory
            AllErrorTicketsByCategory: {},
            //& INFO fetchAllErrorTicketsByUser
            AllErrorTicketsByUser: {},
            //& INFO fetchLastestErrorTickets
            LastestErrorTickets: {},
            //& INFO searchAllErrorTickets
            SearchErrorTicket: {}
          }
        },
        //& INFO ARTICLE COMMENT
        //--------------------
        ArticleComment: {
          type: 'object',
          properties: {
            //& INFO fetchAllArticleComments
            AllArticleComments: { properties: i.allArticleComments },
            //& INFO fetchAllArticleCommentsByUser
            AllArticleCommentsByUser: { properties: i.allArticleCommentsByUser }
          }
        },
        //& INFO ERROR COMMENT
        //--------------------
        ErrorComment: {
          type: 'object',
          properties: {
            //& INFO fetchAllErrorComments
            AllErrorComments: { properties: i.allErrorComments },
            //& INFO fetchAllErrorCommentsByUser
            AllErrorCommentsByUser: { properties: i.allErrorCommentsByUser }
          }
        },
        //& INFO CATEGORY
        //--------------------
        Category: {
          type: 'object',
          properties: {
            //& INFO fetchAllCategories
            AllCategories: {},
            //& INFO fetchAllCategoriesByArticle
            AllCategoriesByArticle: {},
            //& INFO fetchAllCategoriesByErrorTicket
            AllCategoriesByErrorTicket: {}
          }
        }
      }
    },

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
