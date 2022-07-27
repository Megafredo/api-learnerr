//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { createErrorTicket, fetchAllErrorTickets, fetchOneErrorTicket, updateErrorTicket, deleteErrorTicket, fetchAllErrorTicketsByCategory, fetchAllErrorTicketsByUser, fetchLastestErrorTickets, searchAllErrorTickets } from '../controllers/errorTicketController.js';

// //~ Import schema
// import { validation } from '../services/validation.js';
// import { errorTicketSchema, errorTicketUpdateSchema } from '../schema/errorTicket.schema.js';

// //~ Authorization
// import { validateToken } from '../middlewares/validateToken.js';
// import { auth } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/errors', createErrorTicket);
router.get('/api/v1/errors', fetchAllErrorTickets);
router.get('/api/v1/errors/:errorId(\\d+)', fetchOneErrorTicket);
router.patch('/api/v1/errors/:errorId(\\d+)', updateErrorTicket);
router.delete('/api/v1/errors/:errorId(\\d+)', deleteErrorTicket);

router.get('/api/v1/categories/:categoryId(\\d+)/errors', fetchAllErrorTicketsByCategory);
router.get('/api/v1/users/:userId(\\d+)/errors', fetchAllErrorTicketsByUser);
router.post('/api/v1/errors/last', fetchLastestErrorTickets);
//check schémas security input 
router.post('/api/v1/errors/search', searchAllErrorTickets);

//check swagger route 
router.patch('/api/v1/errors/:errorId(\\d+)/solution/:solutionId(\\d+)', updateErrorTicket);


//~ Export router
export { router };