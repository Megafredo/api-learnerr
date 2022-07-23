//~ Import Router
import { Router } from 'express';
const router = Router();

//~ Import modules
import {
  createArticle,  fetchAllArticles,  fetchOneArticle,  updateArticle,  deleteArticle,  sendArticleToDraft, fetchAllArticlesByCategory,  fetchAllArticlesByUser,  fetchLastestArticles } from '../controllers/articleController.js';


//~ Routes
router.post('/api/v1/articles', createArticle);
router.get('/api/v1/articles', fetchAllArticles);
router.get('/api/v1/articles/:articleId(\\d+)', fetchOneArticle);
router.patch('/api/v1/articles/:articleId(\\d+)', updateArticle);
router.delete('/api/v1/articles/:articleId(\\d+)', deleteArticle);

router.post('/api/v1/articles/:articleId(\\d+)/drafts', sendArticleToDraft);
router.get('/api/v1/categories/:categoryId(\\d+)/articles', fetchAllArticlesByCategory);
router.get('/api/v1/users/:userId(\\d+)/articles', fetchAllArticlesByUser);
router.get('/api/v1/articles/last', fetchLastestArticles);

//~ Export router
export { router };
