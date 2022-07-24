//~ Import modules
import { ErrorApi } from '../services/errorHandler.js';
//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

//~ Import Datamapper
import { ErrorTicket } from '../datamappers/index.js';

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
    } catch (err) {
        logger(err.message);
    }
}

async function fetchAllErrorTicketsByUser(req, res) {
    try {
    } catch (err) {
        logger(err.message);
    }
}

async function fetchLastestErrorTickets(req, res) {
    try {
    } catch (err) {
        logger(err.message);
    }
}

async function searchAllErrorTickets(req, res) {
    try {
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
    sendErrorTicketToDraft,
    fetchAllErrorTicketsByCategory,
    fetchAllErrorTicketsByUser,
    fetchLastestErrorTickets,
    searchAllErrorTickets
};
