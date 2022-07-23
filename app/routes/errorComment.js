//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { createErrorComment, fetchAllErrorComments, updateErrorComment, deleteErrorComment, fetchAllErrorCommentsByUser, addSolutionOnErrorTicket} from '../controllers/errorCommentController.js';

//~ Authorization
import { validateToken } from '../middlewares/validateToken.js';
import { auth, admin, author, user } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/errors/:errorId/comments', createErrorComment);
router.get('/api/v1/errors/:errorId/comments', fetchAllErrorComments);
router.patch('/api/v1/errors/:errorId/comments/:commentId', updateErrorComment);
router.delete('/api/v1/errors/:errorId/comments/:commentId', deleteErrorComment);

router.get('/api/v1/users/:userId/error_comments', fetchAllErrorCommentsByUser);
router.patch('/api/v1/errors/:errorId/solution/:solutionId', addSolutionOnErrorTicket);

//~ Export router
export { router };