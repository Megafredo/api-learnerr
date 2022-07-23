//~ Import Router
import { Router } from 'express';
const router = Router();

//~ Import modules
import {
  createArticleComment,  fetchAllArticleComments,  updateArticleComment, deleteArticleComment } from '../controllers/articleCommentController.js';

//~ Authorization
import { validateToken } from '../middlewares/validateToken.js';
import { auth, admin, author, user } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/articles/:articleId/comments', createArticleComment);
router.get('/api/v1/articles/:articleId/comments', fetchAllArticleComments);
router.patch('/api/v1/articles/:articleId/comments/:commentId', updateArticleComment);
router.delete('/api/v1/articles/:articleId/comments/:commentId', deleteArticleComment);

//~ Export router
export { router };
