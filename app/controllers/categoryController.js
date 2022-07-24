//~ Import Error
import { ErrorApi } from '../services/errorHandler.js';

//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

//~ Import Datamapper
import { Category } from '../datamappers/index.js';

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

        return res.status(200).json(categories);

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
    } catch (err) {
        logger(err.message);
    }
}

async function fetchAllCategoriesByErrorTicket(req, res) {
    try {
    } catch (err) {
        logger(err.message);
    }
}

export { createCategory, fetchAllCategories, deleteCategory, fetchAllCategoriesByArticle, fetchAllCategoriesByErrorTicket };
