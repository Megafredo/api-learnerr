//~  Importations examples / status codes
import { required as r, example as e, properties as p } from '../swaggerUtils/swaggerExamples.js';
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
      201: statusCode._201,
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
        description: `Identifiant d'un article`
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
        description: `Identifiant d'un article`
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
        description: `Identifiant d'un article`
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
        description: `Identifiant d'une catégorie`
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
        name: 'userId',
        in: 'path',
        required: true,
        schema: {
          type: 'integer',
          example: 1
        },
        description: `Identifiant d'un utilisateur`
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
            required: r.lastestArticles,
            properties: p.lastestArticles,
            example: e.lastestArticles
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
    summary: `Recherche par mot clé lié aux articles`,
    requestBody: {
      name: 'Body',
      in: 'body',
      required: true,

      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: r.searchArticle,
            properties: p.searchArticle,
            example: e.searchArticle
          },
          description: 'Info body pour récupérer "x" article à partir de "y"'
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


export { articles, oneArticle, articlesByCategory, lastestArticles, articlesByUser, searchAllArticles };
