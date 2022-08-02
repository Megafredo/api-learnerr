//~ Import Router
import { Router } from 'express';
const router = Router();

//~ Import modules
import {  createArticle,  fetchAllArticles,  fetchOneArticle,  updateArticle,  deleteArticle, fetchAllArticlesByCategory,  fetchAllArticlesByUser,  fetchLastestArticles, searchAllArticles } from '../controllers/articleController.js';

// ~ Import schema
import { validation } from '../services/validation.js';
import { articleSchema, articleUpdateSchema, offsetSchema, searchSchema } from '../schema/article.schema.js';

//~ Authorization
import { validateToken } from '../middlewares/validateToken.js';
import { auth, role } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/articles',[validateToken, auth, role], validation.body(articleSchema), createArticle);
router.get('/api/v1/articles', fetchAllArticles);
router.get('/api/v1/articles/:articleId(\\d+)', fetchOneArticle);
router.patch('/api/v1/articles/:articleId(\\d+)', [validateToken, auth, role], validation.body(articleUpdateSchema),updateArticle);
router.delete('/api/v1/articles/:articleId(\\d+)', [validateToken, auth, role],deleteArticle);

router.get('/api/v1/categories/:categoryId(\\d+)/articles', fetchAllArticlesByCategory);
router.get('/api/v1/users/:userId(\\d+)/articles', fetchAllArticlesByUser);
router.post('/api/v1/articles/last', validation.body(offsetSchema),fetchLastestArticles);

router.post('/api/v1/articles/search', validation.body(searchSchema), searchAllArticles);

//~ Export router
export { router };
