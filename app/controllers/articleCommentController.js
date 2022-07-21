//~ Import Error
import {ErrorApi} from '../services/errorHandler.js'

//~ Import Debug 
import debug from 'debug'; 
const logger = debug('articleCommentController');

//~ Import
import { articleComment } from '../datamappers/index.js';


async function createArticleComment(req, res) {
    try {
        

    } catch (err) {
        logger(err.message);
    }
}


async function fetchAllArticleComments(req, res) {
    try {
        const articleId = +req.params.articleId;

        const articleComments = await articleComment.findAllCommentsByArticle(articleId);
        
        if(!articleComments) throw new ErrorApi(`Aucun commentaire trouvé pour cette article`, req, res, 400)

        res.status(200).json(articleComments);
        
    } catch (err) {
        logger(err.message);
    }
}


async function updateArticleComment(req, res) {
    try {
        
        
    } catch (err) {
        logger(err.message);
    }
}


async function deleteArticleComment(req, res) {
    try {
        
        
    } catch (err) {
        logger(err.message);
    }
}


export { createArticleComment, fetchAllArticleComments, updateArticleComment, deleteArticleComment };