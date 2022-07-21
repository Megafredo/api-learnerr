//~ Import Error
import { ErrorApi } from '../services/errorHandler.js';

//~ Import Debug
import debug from 'debug';
const logger = debug('mainController');

import { article } from '../datamappers/index.js';

//~ Controller

async function createArticle(req, res) {
  try {
      const articleData = req.body;

      const articleCreated = await article.create(articleData);

      if (!articleCreated) throw new ErrorApi(`Aucune donnée trouvée`, req, res, 400);

      res.status(200).json('Article créé !')
        
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllArticles(req, res) {
  try {
    const articles = await article.findAll();

    if (!articles) throw new ErrorApi(`Aucun article trouvé`, req, res, 400);

    res.json(articles);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchOneArticle(req, res) {
  try {
    const articleId = +req.params.articleId;

    const oneArticle = await article.findOne(articleId);

    if (!oneArticle) throw new ErrorApi(`Aucun article trouvé`, req, res, 400);

    res.status(200).json(oneArticle);
  } catch (err) {
    logger(err.message);
  }
}

async function updateArticle(req, res) {
  try {
  } catch (err) {
    logger(err.message);
  }
}

async function deleteArticle(req, res) {
  try {
  } catch (err) {
    logger(err.message);
  }
}

async function sendArticleToDraft(req, res) {
  try {
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllArticlesByCategory(req, res) {
  try {
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllArticlesByUser(req, res) {
  try {
  } catch (err) {
    logger(err.message);
  }
}

async function fetchLastestArticles(req, res) {
  try {
  } catch (err) {
    logger(err.message);
  }
}

export {
  createArticle,
  fetchAllArticles,
  fetchOneArticle,
  updateArticle,
  deleteArticle,
  sendArticleToDraft,
  fetchAllArticlesByCategory,
  fetchAllArticlesByUser,
  fetchLastestArticles
};
