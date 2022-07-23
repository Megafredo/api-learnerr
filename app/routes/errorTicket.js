//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { createErrorTicket, fetchAllErrorTickets, fetchOneErrorTicket, updateErrorTicket, deleteErrorTicket, sendErrorTicketToDraft, fetchAllErrorTicketsByCategory, fetchAllErrorTicketsByUser, fetchLastestErrorTickets, searchAllErrorTickets } from '../controllers/errorTicketController.js';

//~ Authorization
import { validateToken } from '../middlewares/validateToken.js';
import { auth } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/errors',[validateToken, auth], createErrorTicket);
router.get('/api/v1/errors', fetchAllErrorTickets);
router.get('/api/v1/errors/:errorId(\\d+)', fetchOneErrorTicket);
router.patch('/api/v1/errors/:errorId(\\d+)',[validateToken, auth], updateErrorTicket);
router.delete('/api/v1/errors/:errorId(\\d+)',[validateToken, auth], deleteErrorTicket);

router.post('/api/v1/errors/:errorId(\\d+)/drafts',[validateToken, auth], sendErrorTicketToDraft);
router.get('/api/v1/categories/:categoryId(\\d+)/errors', fetchAllErrorTicketsByCategory);
router.get('/api/v1/users/:userId(\\d+)/errors', fetchAllErrorTicketsByUser);
router.get('/api/v1/errors/last', fetchLastestErrorTickets);
router.get('/api/v1/errors/search', searchAllErrorTickets);


//~ Export router
export { router };