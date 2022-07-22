//~ Import Error
import {ErrorApi} from '../services/errorHandler.js'

//~ Import Debug 
import debug from 'debug'; 
const logger = debug('mainController');

//~ Import Datamapper
import { Category } from '../datamappers/index.js';


//~ Controller

async function createCategory(req, res) {
    try {
        
        
    } catch (err) {
        logger(err.message);
    }
}


async function fetchAllCategories(req, res) {
    try {
        const categories = await Category.findAll();

        if (!categories) throw new ErrorApi(`Aucune catégorie trouvée`, req, res, 400);
    
        res.status(200).json(categories);
        
    } catch (err) {
        logger(err.message);
    }
}


async function deleteCategory(req, res) {
    try {
        
        
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