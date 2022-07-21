//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { createErrorTicket, fetchAllErrorTickets, fetchOneErrorTicket, updateErrorTicket, deleteErrorTicket, sendErrorTicketToDraft, fetchAllErrorTicketsByCategory, fetchAllErrorTicketsByUser, fetchLastestErrorTickets, searchAllErrorTickets} from '../controllers/errorTicketController.js';


//~ Routes
router.post('/api/v1/errors', createErrorTicket);
router.get('/api/v1/errors', fetchAllErrorTickets);
router.get('/api/v1/errors/:errorId', fetchOneErrorTicket);
router.patch('/api/v1/errors/:errorId', updateErrorTicket);
router.delete('/api/v1/errors/:errorId', deleteErrorTicket);

router.post('/api/v1/errors/:errorId/drafts', sendErrorTicketToDraft);
router.get('/api/v1/categories/:categoryId/errors', fetchAllErrorTicketsByCategory);
router.get('/api/v1/users/:userId/errors', fetchAllErrorTicketsByUser);
router.get('/api/v1/errors/last', fetchLastestErrorTickets);
router.get('/api/v1/errors/search', searchAllErrorTickets);


//~ Export router
export { router };