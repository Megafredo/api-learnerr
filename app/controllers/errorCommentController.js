//~ Import Error
import { ErrorApi } from '../services/errorHandler.js';

//~ Import Debug
import debug from 'debug';
const logger = debug('articleCommentController');

//~ Import Datamapper
import { ErrorComment } from '../datamappers/index.js';

//~ Controller

async function createErrorComment(req, res) {
  try {
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

async function updateErrorComment(req, res) {
  try {
  } catch (err) {
    logger(err.message);
  }
}

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
