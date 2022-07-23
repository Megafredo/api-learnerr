//~ Import Router
import { Router } from 'express';
const router = Router();

//~ Import modules
import {
  createArticleComment,  fetchAllArticleComments,  updateArticleComment, deleteArticleComment } from '../controllers/articleCommentController.js';

//~ Authorization
import { validateToken } from '../middlewares/validateToken.js';
import { auth } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/articles/:articleId(\\d+)/comments',[validateToken, auth], createArticleComment);
router.get('/api/v1/articles/:articleId(\\d+)/comments', fetchAllArticleComments);
router.patch('/api/v1/articles/:articleId(\\d+)/comments/:commentId(\\d+)',[validateToken, auth], updateArticleComment);
router.delete('/api/v1/articles/:articleId(\\d+)/comments/:commentId(\\d+)',[validateToken, auth], deleteArticleComment);

//~ Export router
export { router };
