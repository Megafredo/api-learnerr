//~ Import Error
import { ErrorApi } from '../services/errorHandler.js';

//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

//~ Import Datamapper
import { ErrorComment, ErrorTicket, User } from '../datamappers/index.js';

//~ Controller
async function createErrorComment(req, res) {
  try {
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

    //~ Is id a number ?
    const commentId = +req.params.commentId;
    if (isNaN(commentId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Is id a number ?
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

    req.body = { ...req.body, error_id: errorId, id: commentId };

    //~ Update error
    const commentAdded = await ErrorComment.update(req.body);
    if (commentAdded.length === 0) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

    return res.status(200).json(`Le commentaire a bien été mis à jour`);

  } catch (err) {
    logger(err.message);
  }
}

// /api/v1/errors/:errorId(\\d+)/comments/:commentId(\\d+)
async function deleteErrorComment(req, res) {
  try {
  } catch (err) {
    logger(err.message);
  }
}



async function fetchAllErrorCommentsByUser(req, res) {
  try {
  } catch (err) {
    logger(err.message);
  }
}

async function addSolutionOnErrorTicket(req, res) {
  try {
  } catch (err) {
    logger(err.message);
  }
}

export { createErrorComment, fetchAllErrorComments, updateErrorComment, deleteErrorComment, fetchAllErrorCommentsByUser, addSolutionOnErrorTicket };
