//~ Import Error
import { ErrorApi } from '../services/errorHandler.js';

//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

//~ Import Datamapper
import { Article } from '../datamappers/index.js';

//~ Controller

async function createArticle(req, res) {
    try {
        const articleData = req.body;

        //~ Is article created ?
        const articleCreated = await Article.create(articleData);
        if (!articleCreated) throw new ErrorApi(`Aucune donnée trouvée`, req, res, 400);

        return res.status(200).json('Article créé !');
    } catch (err) {
        logger(err.message);
    }
}

async function fetchAllArticles(req, res) {
    try {
        const articles = await Article.findAll();

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

        //~ Article ticket exist ?
        const oneArticle = await Article.findOne(articleId);
        if (!oneArticle) throw new ErrorApi(`Aucun article trouvé`, req, res, 400);

        return res.status(200).json(oneArticle);
    } catch (err) {
        logger(err.message);
    }
}

async function updateArticle(req, res) {
    try {
        //~ Is id a number ?
        const articleId = +req.params.articleId;
        if (isNaN(articleId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

        //~ Article ticket exist ?
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
