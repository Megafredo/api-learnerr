//~ Import modules
import { ErrorApi } from '../services/errorHandler.js';
//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

//~ Import Datamapper
import { ErrorTicket, Category, User, ErrorComment } from '../datamappers/index.js';

//~ Controllers

async function createErrorTicket(req, res) {
  try {
    //~ Is id a number ?
    const { user_id } = req.body;
    if (isNaN(user_id)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ User exist ?
    const userExist = await User.findOne(user_id);
    if (!userExist) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    if (req.user.id !== user_id) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

    //~ Create error ticket
    const errorCreated = await ErrorTicket.createWithCategories(req.body);
    if (!errorCreated) throw new ErrorApi(`Aucune donnée trouvée`, req, res, 400);

    return res.status(201).json(`Le ticket d'erreur a bien été créé`);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllErrorTickets(req, res) {
  try {
    const errorTickets = await ErrorTicket.findAllDetailed();
    if (!errorTickets) throw new ErrorApi(`Aucun ticket d'erreur trouvé`, req, res, 400);

    return res.status(200).json(errorTickets);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchOneErrorTicket(req, res) {
  try {
    //~ Is id a number ?
    const errorId = +req.params.errorId;
    if (isNaN(errorId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Error ticket exist ?
    const oneError = await ErrorTicket.findOneDetailed(errorId);

    if (!oneError) throw new ErrorApi(`Aucun ticket d'erreur trouvé`, req, res, 400);

    return res.status(200).json(oneError);
  } catch (err) {
    logger(err.message);
  }
}

async function updateErrorTicket(req, res) {
  try {
    //~ Is id a number ?
    const errorId = +req.params.errorId;
    if (isNaN(errorId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Error ticket exist ?
    const errorExist = await ErrorTicket.findOne(errorId);
    if (!errorExist) throw new ErrorApi(`Aucun ticket d'erreur trouvé`, req, res, 400);

    //~ User exist ?
    const { user_id } = req.body;

    const userExist = await User.findOne(user_id);
    if (!userExist) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    if (req.user.id !== user_id) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

    const solutionId = +req.params.solutionId;
    if (solutionId) {
      //~ Is solutionId a number ?
      if (isNaN(solutionId)) throw new ErrorApi(`L'idaa doit être un nombre`, req, res, 400);

      //~ Error Comment exist ?
      const errorCommentExist = await ErrorComment.findOne(solutionId);
      if (!errorCommentExist) throw new ErrorApi(`Aucun commentaire trouvé`, req, res, 400);

      //~ Update error
      req.body = { ...req.body, id: errorId, error_comment_id: solutionId };

      const updateErrorTicket = await ErrorTicket.update(req.body);

      if (!updateErrorTicket) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

      return res.status(200).json(`Ce commentaire a bien été enregistré comme solution`);
    }

    req.body = { ...req.body, id: errorId };

    //~ Update error ticket
    const updateErrorTicket = await ErrorTicket.update(req.body);

    if (!updateErrorTicket) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

    return res.status(200).json(`Le ticket d'erreur a bien été mis à jour`);
  } catch (err) {
    logger(err.message);
  }
}

async function deleteErrorTicket(req, res) {
  try {
    //~ Is id a number ?
    const errorId = +req.params.errorId;
    if (isNaN(errorId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Delete error ticket
    await ErrorTicket.delete(errorId);

    return res.status(200).json(`Le ticket d'erreur a bien été supprimé`);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllErrorTicketsByCategory(req, res) {
  try {
    //~ Is id a number ?
    const categoryId = +req.params.categoryId;
    if (isNaN(categoryId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Category exist ?
    const oneCategory = await Category.findOne(categoryId);
    if (!oneCategory) throw new ErrorApi(`Aucune catégorie trouvée`, req, res, 400);

    const errorTickets = await ErrorTicket.fetchByCategory(categoryId);

    if (errorTickets === null) throw new ErrorApi(`Aucun ticket d'erreur trouvé dans cette catégorie`, req, res, 400);

    return res.status(200).json(errorTickets);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchAllErrorTicketsByUser(req, res) {
  try {
    //~ Is id a number ?
    const userId = +req.params.userId;
    if (isNaN(userId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

    //~ Category exist ?
    const oneUser = await User.findOne(userId);
    if (!oneUser) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    const errorTickets = await ErrorTicket.fetchByUser(userId);

    if (errorTickets === null) throw new ErrorApi(`Aucun ticket d'erreur trouvé pour cet utilisateur`, req, res, 400);

    return res.status(200).json(errorTickets);
  } catch (err) {
    logger(err.message);
  }
}

async function fetchLastestErrorTickets(req, res) {
  try {
    let { limitNb, offsetNb } = req.body;
    if (isNaN(limitNb)) throw new ErrorApi(`Ce paramètre doit être un nombre`, req, res, 400);
    if (isNaN(offsetNb)) throw new ErrorApi(`Ce paramètre être un nombre`, req, res, 400);

    const latestErrors = await ErrorTicket.fetchOnScroll(limitNb, offsetNb);

    if (latestErrors.length === 0) throw new ErrorApi(`Aucun contenu pour le moment`, req, res, 400);

    return res.status(200).json(latestErrors);
  } catch (err) {
    logger(err.message);
  }
}

async function searchAllErrorTickets(req, res) {
  try {
    const searchedErrors = await ErrorTicket.search(req.body);

    return res.status(200).json(searchedErrors);
  } catch (err) {
    logger(err.message);
  }
}

export {
  createErrorTicket,
  fetchAllErrorTickets,
  fetchOneErrorTicket,
  updateErrorTicket,
  deleteErrorTicket,
  fetchAllErrorTicketsByCategory,
  fetchAllErrorTicketsByUser,
  fetchLastestErrorTickets,
  searchAllErrorTickets
};
