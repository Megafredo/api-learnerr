//~ Import Error
import { ErrorApi } from '../services/errorHandler.js';

//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

import { check } from '../services/checkWord.js';

//~ Import Datamapper
import { ArticleComment, Article, User } from '../datamappers/index.js';

async function createArticleComment(req, res) {
  try {
    //~ Check bad words
    const info = await check(req.body);

    if (info.badWordFound > 0) return res.status(403).json({ WARNING: 'CE COMMENTAIRE CONTIENT DES MOTS INTERDITS !!!', message: info.message });
    
    //~ Is id a number ?
    const articleId = +req.params.articleId;
    if (isNaN(articleId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Article exist ?
    const articleExist = await Article.findOne(articleId);
    if (!articleExist) throw new ErrorApi(`Aucun article trouvé`, req, res, 400);

    //~ Is id a number ?
    const { user_id } = req.body;
    if (isNaN(user_id)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ User exist ?
    const userExist = await User.findOne(user_id);
    if (!userExist) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    if (req.user.id !== user_id) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

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
    if (isNaN(articleId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    const commentId = +req.params.commentId;
    if (isNaN(commentId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    const { user_id } = req.body;
    if (isNaN(user_id)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Article exist ?
    const articleExist = await Article.findOne(articleId);
    if (!articleExist) throw new ErrorApi(`Aucun article trouvé`, req, res, 400);

    //~ Article Comment exist ?
    const articleCommentExist = await ArticleComment.findOne(commentId);
    if (!articleCommentExist) throw new ErrorApi(`Aucun commentaire trouvé`, req, res, 400);

    //~ User exist ?
    const userExist = await User.findOne(user_id);
    if (!userExist) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    if (req.user.id !== user_id) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

    req.body = { ...req.body, article_id: articleId, id: commentId };

    //~ Update article comment
    const commentAdded = await ArticleComment.update(req.body);

    if (!commentAdded) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

    return res.status(200).json(`Le commentaire a bien été mis à jour`);
  } catch (err) {
    logger(err.message);
  }
}

async function deleteArticleComment(req, res) {
  try {
    //~ Is id a number ?
    const articleId = +req.params.articleId;
    if (isNaN(articleId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    const commentId = +req.params.commentId;
    if (isNaN(commentId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    const { user_id } = req.body;
    if (isNaN(user_id)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Article exist ?
    const articleExist = await Article.findOne(articleId);
    if (!articleExist) throw new ErrorApi(`Aucun article trouvé`, req, res, 400);

    //~ Article Comment exist ?
    const articleCommentExist = await ArticleComment.findOne(commentId);
    if (!articleCommentExist) throw new ErrorApi(`Aucun commentaire trouvé`, req, res, 400);

    //~ User exist ?
    const userExist = await User.findOne(user_id);
    if (!userExist) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    //~ Delete article comment
    req.body = { ...req.body, article_id: articleId, id: commentId };

    const commentDeleted = await ArticleComment.deleteComment(req.body);

    if (commentDeleted) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

    return res.status(200).json(`Le commentaire a bien été supprimé`);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllArticleCommentsByUser(req, res) {
  try {
    const userId = +req.params.userId;
    if (isNaN(userId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    const oneUser = await User.findOne(userId);
    if (!oneUser) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    const comments = await ArticleComment.allCommentsByUser(userId);

    if (comments.length === 0) throw new ErrorApi(`Aucun commentaire trouvé pour cet utilisateur`, req, res, 400);

    return res.status(200).json(comments);

  } catch (err) {
      logger(err.message);
  }
}

export { createArticleComment, fetchAllArticleComments, updateArticleComment, deleteArticleComment, fetchAllArticleCommentsByUser };
