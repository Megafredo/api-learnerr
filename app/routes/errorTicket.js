//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { createErrorTicket, fetchAllErrorTickets, fetchOneErrorTicket, updateErrorTicket, deleteErrorTicket, sendErrorTicketToDraft, fetchAllErrorTicketsByCategory, fetchAllErrorTicketsByUser, fetchLastestErrorTickets, searchAllErrorTickets } from '../controllers/errorTicketController.js';


//~ Routes
router.post('/api/v1/errors', createErrorTicket);
router.get('/api/v1/errors', fetchAllErrorTickets);
router.get('/api/v1/errors/:errorId(\\d+)', fetchOneErrorTicket);
router.patch('/api/v1/errors/:errorId(\\d+)', updateErrorTicket);
router.delete('/api/v1/errors/:errorId(\\d+)', deleteErrorTicket);

router.post('/api/v1/errors/:errorId(\\d+)/drafts', sendErrorTicketToDraft);
router.get('/api/v1/categories/:categoryId(\\d+)/errors', fetchAllErrorTicketsByCategory);
router.get('/api/v1/users/:userId(\\d+)/errors', fetchAllErrorTicketsByUser);
router.get('/api/v1/errors/last', fetchLastestErrorTickets);
router.get('/api/v1/errors/search', searchAllErrorTickets);


//~ Export router
export { router };