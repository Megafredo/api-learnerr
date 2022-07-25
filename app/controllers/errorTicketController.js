//~ Import modules
import { ErrorApi } from '../services/errorHandler.js';
//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

//~ Import Datamapper
import { ErrorTicket, Category, User } from '../datamappers/index.js';

//~ Controllers

async function createErrorTicket(req, res) {
    try {
        //~ Create error ticket
        await ErrorTicket.create(req.body);
        return res.status(201).json(`Le ticket d'erreur a bien été créé`);
    } catch (err) {
        logger(err.message);
    }
}

async function fetchAllErrorTickets(req, res) {
    try {
        const errorTickets = await ErrorTicket.findAll();
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
        const oneError = await ErrorTicket.findOne(errorId);

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
        const oneError = await ErrorTicket.findOne(errorId);
        if (!oneError) throw new ErrorApi(`Aucun ticket d'erreur trouvé`, req, res, 400);

        req.body = { ...req.body, id: errorId };

        //~ Update error ticket
        await ErrorTicket.update(req.body);

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

        if(errorTickets === null) throw new ErrorApi(`Aucun ticket d'erreur trouvé dans cette catégorie`, req, res, 204);
        
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

        if(errorTickets === null) throw new ErrorApi(`Aucun ticket d'erreur trouvé pour cet utilisateur`, req, res, 204);
        
        return res.status(200).json(errorTickets);
    } catch (err) {
        logger(err.message);
    }
}

async function fetchLastestErrorTickets(req, res) {
    try {
        const latestErrors = await ErrorTicket.fetchLastest(4);

        if (latestErrors.length === 0) return res.status(204).json('Aucun contenu pour le moment');

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
