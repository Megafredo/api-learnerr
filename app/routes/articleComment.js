//~ Import Router
import { Router } from 'express';
const router = Router();

//~ Import modules
import {
  createArticleComment, fetchAllArticleComments, updateArticleComment, deleteArticleComment, fetchAllArticleCommentsByUser
} from '../controllers/articleCommentController.js';
  
// //~ Import schema
// import { validation } from '../services/validation.js';
// import { articleCommentSchema } from '../schema/articleComment.schema.js';

// //~ Authorization
// import { validateToken } from '../middlewares/validateToken.js';
// import { auth } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/articles/:articleId(\\d+)/comments', createArticleComment);
router.get('/api/v1/articles/:articleId(\\d+)/comments', fetchAllArticleComments);
router.patch('/api/v1/articles/:articleId(\\d+)/comments/:commentId(\\d+)', updateArticleComment);
router.delete('/api/v1/articles/:articleId(\\d+)/comments/:commentId(\\d+)', deleteArticleComment);

//check swagger route 
router.get('/api/v1/users/:userId(\\d+)/article_comments', fetchAllArticleCommentsByUser);

//~ Export router
export { router };
