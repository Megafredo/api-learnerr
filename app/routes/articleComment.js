//~ Import Router
import { Router } from 'express';
const router = Router();

//~ Import modules
import {
  createArticleComment, fetchAllArticleComments, updateArticleComment, deleteArticleComment
} from '../controllers/articleCommentController.js';
  
//~ Import schema
import { validation } from '../services/validation.js';
import { articleCommentSchema } from '../schema/articleComment.schema.js';

//~ Authorization
import { validateToken } from '../middlewares/validateToken.js';
import { auth } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/articles/:articleId(\\d+)/comments',[validateToken, auth],validation.body(articleCommentSchema), createArticleComment);
router.get('/api/v1/articles/:articleId(\\d+)/comments', fetchAllArticleComments);
router.patch('/api/v1/articles/:articleId(\\d+)/comments/:commentId(\\d+)',[validateToken, auth], validation.body(articleCommentSchema), updateArticleComment);
router.delete('/api/v1/articles/:articleId(\\d+)/comments/:commentId(\\d+)',[validateToken, auth], deleteArticleComment);

//~ Export router
export { router };
