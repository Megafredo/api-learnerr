//~  Importations examples
import { required as r, schemaJoi as s, infoReturn as i, tableSql } from './swaggerExamples.js';

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

    //& -------------------- TABLES_SQL
    TABLES_SQL: {

      type: 'object',
      properties: {

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

    //~ -------------------- SCHEMAS_JOI
    SCHEMAS_JOI: {

      type: 'object',
      properties: {

        //~ ------------------
        User: {
          type: 'object',
          properties: {
            SignIn_User: { required: r.signIn, properties: s.signIn },
            ignUp_User: { required: r.signUp, properties: s.signUp },
            Update_User: { properties: s.updateUser },
            inactivate_User: { required: r.inactivateUser, properties: s.inactivateUser }
          }
        },

        //~ ------------------
        Article: {
          type: 'object',
          properties: {
            Create_Article: { required: r.createArticle, properties: s.createArticle },
            Update_Article: { required: r.updateArticle, properties: s.updateArticle }
          }
        },

        //~ ------------------
        ErrorTicket: {
          type: 'object',
          properties: {
            Create_ErrorTicket: { required: r.createErrorTicket, properties: s.createErrorTicket },
            Update_ErrorTicket: { required: r.updateErrorTicket, properties: s.updateErrorTicket }
          }
        },

        //~ ------------------
        ArticleComment: {
          type: 'object',
          properties: {
            Article_Comment: { required: r.articleComment, properties: s.articleComment }
          }
        },

        //~ ------------------
        ErrorComment: {
          type: 'object',
          properties: {
            Error_Comment: { required: r.errorComment, properties: s.errorComment }
          }
        },

        //~ ------------------
        Category: {
          type: 'object',
          properties: {
            Create_Category: { required: r.createCategory, properties: s.createCategory }
          }
        }
      }
    },

    //* -------------------- INFO_RETURN
    INFO_RETURN: {

      type: 'object',
      properties: {

        //* ------------------
        User: {
          type: 'object',
          properties: {
            // fetchAllUsers
            AllUsers: { properties: i.allUsers },
            // fetchOneUser
            OneUser: { properties: i.oneUser },
            // doSignIn
            SignInUser: { properties: i.signInUser },
            // fetchPanelUser
            PanelUser: { properties: i.panelUser }
          }
        },

        //* ------------------
        Article: {

          type: 'object',
          properties: {

            // fetchAllArticles
            AllArticles: { properties: i.allArticles },
            // fetchOneArticle
            OneArticle: { properties: i.oneArticle },
            // fetchAllArticlesByCategory
            AllArticlesByCategory: { properties: i.allArticlesByCategory },
            // fetchAllArticlesByUser
            AllArticlesByUser: { properties: i.allArticlesByUser },
            // fetchLastestArticles
            LastestArticles: { properties: i.lastestArticles },
            // searchAllArticles
            SearchArticles: { properties: i.searchArticle }
          }
        },
        
        //* ------------------
        ErrorTicket: {

          type: 'object',
          properties: {

            // fetchAllErrorTickets
            AllErrorTickets: { properties: i.allErrorTickets },
            // fetchOneErrorTicket
            OneErrorTicket: { properties: i.oneErrorTicket },
            // fetchAllErrorTicketsByCategory
            AllErrorTicketsByCategory: { properties: i.allErrorTicketsByCategory },
            // fetchAllErrorTicketsByUser
            AllErrorTicketsByUser: {properties: i.allErrorTicketsByUser },
            // fetchLastestErrorTickets
            LastestErrorTickets: { properties: i.lastestErrorTickets },
            // searchAllErrorTickets
            SearchErrorTicket: { properties: i.searchErrorTicket }
          }
        },

        //* ------------------
        ArticleComment: {

          type: 'object',
          properties: {

            // fetchAllArticleComments
            AllArticleComments: { properties: i.allArticleComments },
            // fetchAllArticleCommentsByUser
            AllArticleCommentsByUser: { properties: i.allArticleCommentsByUser }
          }
        },

        //* ------------------
        ErrorComment: {

          type: 'object',
          properties: {

            // fetchAllErrorComments
            AllErrorComments: { properties: i.allErrorComments },
            // fetchAllErrorCommentsByUser
            AllErrorCommentsByUser: { properties: i.allErrorCommentsByUser }
          }
        },

        //* ------------------
        Category: {

          type: 'object',
          properties: {

            // fetchAllCategories
            AllCategories: { properties: i.allCategories },
            // fetchAllCategoriesByArticle
            AllCategoriesByArticle: { properties: i.allCategoriesByArticle },
            // fetchAllCategoriesByErrorTicket
            AllCategoriesByErrorTicket: { properties: i.allCategoriesByErrorTicket }
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
  }
};

export { components };
