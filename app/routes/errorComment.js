//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { createErrorComment, fetchAllErrorComments, updateErrorComment, deleteErrorComment, fetchAllErrorCommentsByUser} from '../controllers/errorCommentController.js';

//~ Authorization
import { validateToken } from '../middlewares/validateToken.js';
import { auth } from '../middlewares/auth.js';

//~ Import schema
import { validation } from '../services/validation.js';
import { errorCommentSchema } from '../schema/errorComment.schema.js';

//~ Routes
router.post('/api/v1/errors/:errorId(\\d+)/comments',[validateToken, auth], validation.body(errorCommentSchema), createErrorComment);
router.get('/api/v1/errors/:errorId(\\d+)/comments', fetchAllErrorComments);
router.patch('/api/v1/errors/:errorId(\\d+)/comments/:commentId(\\d+)',[validateToken, auth],validation.body(errorCommentSchema), updateErrorComment);
router.delete('/api/v1/errors/:errorId(\\d+)/comments/:commentId(\\d+)',[validateToken, auth], deleteErrorComment);

router.get('/api/v1/users/:userId(\\d+)/error_comments',[validateToken, auth], fetchAllErrorCommentsByUser);


//~ Export router
export { router };