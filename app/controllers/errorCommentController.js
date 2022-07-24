//~ Import Error
import { ErrorApi } from '../services/errorHandler.js';

//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

//~ Import Datamapper
import { ErrorComment, ErrorTicket } from '../datamappers/index.js';

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
