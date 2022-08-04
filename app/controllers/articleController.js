//~ Import Error
import { ErrorApi } from '../services/errorHandler.js';

//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

//~ Import Datamapper
import { Article, Category, User } from '../datamappers/index.js';

//~ Controller

async function createArticle(req, res) {
  try {
    //~ Is id a number ?
    const { user_id } = req.body;
    if (isNaN(user_id)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ User exist ?
    const userExist = await User.findOne(user_id);
    if (!userExist) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    //~ Is article created ?
    const articleCreated = await Article.createWithCategories(req.body);
    
    if (!articleCreated) throw new ErrorApi(`Aucune donnée trouvée`, req, res, 400);

    return res.status(201).json('Article créé !');
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllArticles(req, res) {
  try {
    const articles = await Article.findAllDetailed();

    if (!articles) throw new ErrorApi(`Aucun article trouvé`, req, res, 400);

    return res.status(200).json(articles);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchOneArticle(req, res) {
  try {
    //~ Is id a number ?
    const articleId = +req.params.articleId;
    if (isNaN(articleId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Article exist ?
    const oneArticle = await Article.findOneDetailed(articleId);
    if (!oneArticle) throw new ErrorApi(`Aucun article trouvé`, req, res, 400);

    return res.status(200).json(oneArticle);
  } catch (err) {
    logger(err.message);
  }
}

async function updateArticle(req, res) {
  try {
    //~ Is id a number ?
    const { user_id } = req.body;
    if (isNaN(user_id)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ User exist ?
    const userExist = await User.findOne(user_id);
    if (!userExist) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    //~ Is id a number ?
    const articleId = +req.params.articleId;
    if (isNaN(articleId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Article exist ?
    const oneArticle = await Article.findOne(articleId);
    if (!oneArticle) throw new ErrorApi(`Aucun article trouvé`, req, res, 400);

    req.body = { ...req.body, id: articleId };

    //~ Update article
    await Article.update(req.body);

    res.status(200).json(`L'article a bien été mis à jour`);
  } catch (err) {
    logger(err.message);
  }
}

async function deleteArticle(req, res) {
  try {
    //~ Is id a number ?
    const articleId = +req.params.articleId;
    if (isNaN(articleId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Delete article
    await Article.delete(articleId);

    return res.status(200).json(`L'article a bien été supprimé`);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllArticlesByCategory(req, res) {
  try {
    //~ Is id a number ?
    const categoryId = +req.params.categoryId;
    if (isNaN(categoryId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Category exist ?
    const oneCategory = await Category.findOne(categoryId);

    if (!oneCategory) throw new ErrorApi(`Aucune catégorie trouvée`, req, res, 400);

    const article = await Article.fetchByCategory(categoryId);

    if (article === null) throw new ErrorApi(`Aucun article trouvé dans cette catégorie`, req, res, 400);

    return res.status(200).json(article);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllArticlesByUser(req, res) {
  try {
    //~ Is id a number ?
    const userId = +req.params.userId;
    if (isNaN(userId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Category exist ?
    const oneUser = await User.findOne(userId);
    if (!oneUser) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    const article = await Article.fetchByUser(userId);

    if (article === null) throw new ErrorApi(`Aucun article trouvé pour cet utilisateur`, req, res, 400);

    return res.status(200).json(article);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchLastestArticles(req, res) {
  try {
    let { limitNb, offsetNb } = req.body;
    if (isNaN(limitNb)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);
    if (isNaN(offsetNb)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    const latestArticles = await Article.fetchOnScroll(limitNb, offsetNb);

    if (latestArticles.length === 0) return res.status(400).json('Aucun contenu pour le moment');

    return res.status(200).json(latestArticles);
  } catch (err) {
    logger(err.message);
  }
}

async function searchAllArticles(req, res) {
  try {
    const searchedArticles = await Article.search(req.body);
    return res.status(200).json(searchedArticles);
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
  fetchAllArticlesByCategory,
  fetchAllArticlesByUser,
  fetchLastestArticles,
  searchAllArticles
};
