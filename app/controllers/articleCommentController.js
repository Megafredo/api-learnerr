//~ Import Error
import {ErrorApi} from '../services/errorHandler.js'

//~ Import Debug 
import debug from 'debug'; 
const logger = debug('Controller');

//~ Import Datamapper
import { ArticleComment } from '../datamappers/index.js';


async function createArticleComment(req, res) {
    try {
        

    } catch (err) {
        logger(err.message);
    }
}


async function fetchAllArticleComments(req, res) {
    try {
        const articleId = +req.params.articleId;

        const articleComments = await ArticleComment.findAllCommentsByArticle(articleId);
        
        if(!articleComments) throw new ErrorApi(`Aucun commentaire trouvé pour cette article`, req, res, 400)

        return res.status(200).json(articleComments);
        
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