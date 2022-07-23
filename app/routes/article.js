//~ Import Router
import { Router } from 'express';
const router = Router();

//~ Import modules
import {
  createArticle,  fetchAllArticles,  fetchOneArticle,  updateArticle,  deleteArticle,  sendArticleToDraft, fetchAllArticlesByCategory,  fetchAllArticlesByUser,  fetchLastestArticles } from '../controllers/articleController.js';

//~ Authorization
import { validateToken } from '../middlewares/validateToken.js';
import { auth, admin, role } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/articles', [validateToken, auth], createArticle);
router.get('/api/v1/articles', [validateToken, auth] , fetchAllArticles);
router.get('/api/v1/articles/:articleId(\\d+)', fetchOneArticle);
router.patch('/api/v1/articles/:articleId(\\d+)', [validateToken, auth, role], updateArticle);
router.delete('/api/v1/articles/:articleId(\\d+)',[validateToken, auth, role], deleteArticle);

router.post('/api/v1/articles/:articleId(\\d+)/drafts',[validateToken, auth, role], sendArticleToDraft);
router.get('/api/v1/categories/:categoryId(\\d+)/articles', fetchAllArticlesByCategory);
router.get('/api/v1/users/:userId(\\d+)/articles', fetchAllArticlesByUser);
router.get('/api/v1/articles/last', fetchLastestArticles);

//~ Export router
export { router };
