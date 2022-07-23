//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { createErrorComment, fetchAllErrorComments, updateErrorComment, deleteErrorComment, fetchAllErrorCommentsByUser, addSolutionOnErrorTicket} from '../controllers/errorCommentController.js';

//~ Authorization
import { validateToken } from '../middlewares/validateToken.js';
import { auth } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/errors/:errorId(\\d+)/comments',[validateToken, auth], createErrorComment);
router.get('/api/v1/errors/:errorId(\\d+)/comments', fetchAllErrorComments);
router.patch('/api/v1/errors/:errorId(\\d+)/comments/:commentId(\\d+)',[validateToken, auth], updateErrorComment);
router.delete('/api/v1/errors/:errorId(\\d+)/comments/:commentId(\\d+)',[validateToken, auth], deleteErrorComment);

router.get('/api/v1/users/:userId(\\d+)/error_comments',[validateToken, auth], fetchAllErrorCommentsByUser);
router.patch('/api/v1/errors/:errorId(\\d+)/solution/:solutionId(\\d+)',[validateToken, auth], addSolutionOnErrorTicket);

//~ Export router
export { router };