//~ Import Error
import { ErrorApi } from '../services/errorHandler.js';

//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

import { check } from '../services/checkWord.js';

//~ Import Datamapper
import { ErrorComment, ErrorTicket, User } from '../datamappers/index.js';

//~ Controller
async function createErrorComment(req, res) {
  try {
    //~ Check bad words
    const info = await check(req.body);

    if (info.badWordFound > 0) return res.status(403).json({ WARNING: 'CE COMMENTAIRE CONTIENT DES MOTS INTERDITS !!!', message: info.message });

    //~ Is id a number ?
    const { user_id } = req.body;
    if (isNaN(user_id)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ User exist ?
    const userExist = await User.findOne(user_id);
    if (!userExist) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    //~ Is id a number ?
    const errorId = +req.params.errorId;
    if (isNaN(errorId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Article exist ?
    const errorTicketExist = await ErrorTicket.findOne(errorId);
    if (!errorTicketExist) throw new ErrorApi(`Aucun ticket d'erreur trouvé`, req, res, 400);

    //~ Create article comment
    req.body = { ...req.body, error_id: errorId };

    await ErrorComment.create(req.body);

    return res.status(200).json('Commentaire créé !');
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllErrorComments(req, res) {
  try {
    const errorId = +req.params.errorId;

    const errorComments = await ErrorComment.findAllCommentsByErrorTicket(errorId);

    if (!errorComments) throw new ErrorApi(`Aucun commentaire trouvé pour cette erreur`, req, res, 400);

    return res.status(200).json(errorComments);
  } catch (err) {
    logger(err.message);
  }
}

// /api/v1/errors/:errorId(\\d+)/comments/:commentId(\\d+)
async function updateErrorComment(req, res) {
  try {
    //~ Is id a number ?
    const errorId = +req.params.errorId;
    if (isNaN(errorId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    const commentId = +req.params.commentId;
    if (isNaN(commentId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    const { user_id } = req.body;
    if (isNaN(user_id)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Error exist ?
    const errorExist = await ErrorTicket.findOne(errorId);
    if (!errorExist) throw new ErrorApi(`Aucune erreur trouvée`, req, res, 400);

    //~ Error Comment exist ?
    const errorCommentExist = await ErrorComment.findOne(commentId);
    if (!errorCommentExist) throw new ErrorApi(`Aucun commentaire trouvé`, req, res, 400);

    //~ User exist ?
    const userExist = await User.findOne(user_id);
    if (!userExist) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    //~ Update error
    req.body = { ...req.body, error_id: errorId, id: commentId };

    const commentAdded = await ErrorComment.update(req.body);
    if (!commentAdded) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

    return res.status(200).json(`Le commentaire a bien été mis à jour`);
  } catch (err) {
    logger(err.message);
  }
}

// /api/v1/errors/:errorId(\\d+)/comments/:commentId(\\d+)
async function deleteErrorComment(req, res) {
  try {
    //~ Is id a number ?
    const errorId = +req.params.errorId;
    if (isNaN(errorId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    const commentId = +req.params.commentId;
    if (isNaN(commentId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    const { user_id } = req.body;
    if (isNaN(user_id)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Error exist ?
    const errorExist = await ErrorTicket.findOne(errorId);
    if (!errorExist) throw new ErrorApi(`Aucune erreur trouvée`, req, res, 400);

    //~ Error Comment exist ?
    const errorCommentExist = await ErrorComment.findOne(commentId);
    if (!errorCommentExist) throw new ErrorApi(`Aucun commentaire trouvé`, req, res, 400);

    //~ User exist ?
    const userExist = await User.findOne(user_id);
    if (!userExist) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    //~ Delete article comment
    req.body = { ...req.body, error_id: errorId, id: commentId };

    const commentDeleted = await ErrorComment.deleteComment(req.body);

    if (commentDeleted) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

    return res.status(200).json(`Le commentaire a bien été supprimé`);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllErrorCommentsByUser(req, res) {
  try {
    const userId = +req.params.userId;
    if (isNaN(userId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    const oneUser = await User.findOne(userId);
    if (!oneUser) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    const comments = await ErrorComment.allCommentsByUser(userId);

    if (comments.length === 0) throw new ErrorApi(`Aucun commentaire trouvé pour cet utilisateur`, req, res, 400);

    return res.status(200).json(comments);
  } catch (err) {
    logger(err.message);
  }
}

// async function addSolutionOnErrorTicket(req, res) {
//     try {
//         //~ Is errorId a number ?
//         const errorId = +req.params.errorId;
//         if (isNaN(errorId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

//         //~ Is solutionId a number ?
//         const solutionId = +req.params.solutionId;
//         if (isNaN(solutionId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

//         //~ Error exist ?
//         const errorExist = await ErrorTicket.findOne(errorId);
//         if (!errorExist) throw new ErrorApi(`Aucune erreur trouvée`, req, res, 400);

//         //~ Error Comment exist ?
//         const errorCommentExist = await ErrorComment.findOne(solutionId);
//         if (!errorCommentExist) throw new ErrorApi(`Aucun commentaire trouvé`, req, res, 400);

//         //~ User exist ?
//         const userExist = await User.findOne(user_id);
//         if (!userExist) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

//         //~ Update error
//         req.body = { ...req.body, id: errorId, error_comment_id: solutionId };

//         const commentAdded = await ErrorComment.update(req.body);
//         if (!commentAdded) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

//         return res.status(200).json(`Ce commentaire a bien été enregistré comme solution`);
//     } catch (err) {
//         logger(err.message);
//     }
// }

export { createErrorComment, fetchAllErrorComments, updateErrorComment, deleteErrorComment, fetchAllErrorCommentsByUser };
