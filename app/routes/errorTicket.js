//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { createErrorTicket, fetchAllErrorTickets, fetchOneErrorTicket, updateErrorTicket, deleteErrorTicket, fetchAllErrorTicketsByCategory, fetchAllErrorTicketsByUser, fetchLastestErrorTickets, searchAllErrorTickets } from '../controllers/errorTicketController.js';

//~ Import schema
import { validation } from '../services/validation.js';
import { errorTicketSchema, errorTicketUpdateSchema } from '../schema/errorTicket.schema.js';

//~ Authorization
import { validateToken } from '../middlewares/validateToken.js';
import { auth } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/errors',[validateToken, auth], validation.body(errorTicketSchema), createErrorTicket);
router.get('/api/v1/errors', fetchAllErrorTickets);
router.get('/api/v1/errors/:errorId(\\d+)', fetchOneErrorTicket);
router.patch('/api/v1/errors/:errorId(\\d+)',[validateToken, auth],validation.body(errorTicketUpdateSchema), updateErrorTicket);
router.delete('/api/v1/errors/:errorId(\\d+)',[validateToken, auth], deleteErrorTicket);

router.get('/api/v1/categories/:categoryId(\\d+)/errors', fetchAllErrorTicketsByCategory);
router.get('/api/v1/users/:userId(\\d+)/errors', fetchAllErrorTicketsByUser);
router.get('/api/v1/errors/last', fetchLastestErrorTickets);
router.get('/api/v1/errors/search', searchAllErrorTickets);


//~ Export router
export { router };