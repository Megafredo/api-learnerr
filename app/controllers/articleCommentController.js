//~ Import Error
import { ErrorApi } from '../services/errorHandler.js';

//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

//~ Import Datamapper
import { ArticleComment, Article } from '../datamappers/index.js';

async function createArticleComment(req, res) {
    try {
        //~ Is id a number ?
        const articleId = +req.params.articleId;
        if (isNaN(articleId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

        //~ Article exist ?
        const articleExist = await Article.findOne(articleId);
        if (!articleExist) throw new ErrorApi(`Aucun article trouvé`, req, res, 400);

        //~ Create article comment
        req.body = { ...req.body, article_id: articleId };

        await ArticleComment.create(req.body);

        return res.status(200).json('Commentaire créé !');
    } catch (err) {
        logger(err.message);
    }
}

async function fetchAllArticleComments(req, res) {
    try {
        //~ Is id a number ?
        const articleId = +req.params.articleId;
        if (isNaN(articleId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

        //~ Article comment exist ?
        const articleComments = await ArticleComment.findAllCommentsByArticle(articleId);
        if (!articleComments) throw new ErrorApi(`Aucun commentaire trouvé pour cette article`, req, res, 400);

        return res.status(200).json(articleComments);
    } catch (err) {
        logger(err.message);
    }
}

// /api/v1/articles/:articleId(\\d+)/comments/:commentId(\\d+)
async function updateArticleComment(req, res) {
    try {
        //~ Is id a number ?
        const articleId = +req.params.articleId;
        const commentId = +req.params.commentId;
        if (isNaN(articleId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);
        if (isNaN(commentId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);
    } catch (err) {
        logger(err.message);
    }
}

// /api/v1/articles/:articleId(\\d+)/comments/:commentId(\\d+)
async function deleteArticleComment(req, res) {
    try {
        //~ Is id a number ?
        const articleId = +req.params.articleId;
        const commentId = +req.params.commentId;
        if (isNaN(articleId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);
        if (isNaN(commentId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);
    } catch (err) {
        logger(err.message);
    }
}

export { createArticleComment, fetchAllArticleComments, updateArticleComment, deleteArticleComment };
