//~ Import Error
import { ErrorApi } from '../services/errorHandler.js';
import { baseConvertSvg } from '../utils/baseConvertSvg.js';

//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

//~ Import Datamapper
import { Category, Article, ErrorTicket } from '../datamappers/index.js';

//~ Controller

async function createCategory(req, res) {
  try {
    //~ Create category
    await Category.create(req.body);
    return res.status(201).json(`La categorie a bien été créée`);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllCategories(req, res) {
  try {
    const categories = await Category.findAll();
   
    if (!categories) throw new ErrorApi(`Aucune catégorie trouvée`, req, res, 400);

    const result = baseConvertSvg(categories)

    return res.status(200).json(result);
  } catch (err) {
    logger(err.message);
  }
}

async function deleteCategory(req, res) {
  try {
    //~ Is id a number ?
    const categoryId = +req.params.categoryId;
    if (isNaN(categoryId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Delete error ticket
    await Category.delete(categoryId);

    return res.status(200).json(`La catégorie a bien été supprimée`);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllCategoriesByArticle(req, res) {
  try {
    //~ Is id a number ?
    const articleId = +req.params.articleId;
    if (isNaN(articleId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Article exist ?
    const oneArticle = await Article.findOne(articleId);
    if (!oneArticle) throw new ErrorApi(`Aucun article trouvé`, req, res, 400);

    const categories = await Category.byArticle(articleId);

    if (categories.length === 0) throw new ErrorApi(`Aucune catégorie n'est liée à l'article pour le moment`, req, res, 400);

    return res.status(200).json(categories);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllCategoriesByErrorTicket(req, res) {
  try {
    //~ Is id a number ?
    const errorId = +req.params.errorId;
    if (isNaN(errorId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Error ticket exist ?
    const oneError = await ErrorTicket.findOne(errorId);
    if (!oneError) throw new ErrorApi(`Aucun ticket d'erreur trouvé`, req, res, 400);

    const categories = await Category.byError(errorId);

    if (categories.length === 0) throw new ErrorApi(`Aucune catégorie n'est liée au ticket d'erreur pour le moment`, req, res, 400);

    return res.status(200).json(categories);
  } catch (err) {
    logger(err.message);
  }
}

export { createCategory, fetchAllCategories, deleteCategory, fetchAllCategoriesByArticle, fetchAllCategoriesByErrorTicket };
