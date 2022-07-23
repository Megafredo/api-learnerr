//~ Import Router
import { Router } from 'express';
const router = Router();

//~ Import modules
import {
  createArticleComment,  fetchAllArticleComments,  updateArticleComment, deleteArticleComment } from '../controllers/articleCommentController.js';



//~ Routes
router.post('/api/v1/articles/:articleId(\\d+)/comments', createArticleComment);
router.get('/api/v1/articles/:articleId(\\d+)/comments', fetchAllArticleComments);
router.patch('/api/v1/articles/:articleId(\\d+)/comments/:commentId(\\d+)', updateArticleComment);
router.delete('/api/v1/articles/:articleId(\\d+)/comments/:commentId(\\d+)', deleteArticleComment);

//~ Export router
export { router };
