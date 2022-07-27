//~ Import Router
import { Router } from 'express';
const router = Router();

//~ Import modules
import {  createArticle,  fetchAllArticles,  fetchOneArticle,  updateArticle,  deleteArticle, fetchAllArticlesByCategory,  fetchAllArticlesByUser,  fetchLastestArticles, searchAllArticles } from '../controllers/articleController.js';

// //~ Import schema
// import { validation } from '../services/validation.js';
// import { articleSchema, articleUpdateSchema } from '../schema/article.schema.js';

// //~ Authorization
// import { validateToken } from '../middlewares/validateToken.js';
// import { auth, role } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/articles', createArticle);
router.get('/api/v1/articles', fetchAllArticles);
router.get('/api/v1/articles/:articleId(\\d+)', fetchOneArticle);
router.patch('/api/v1/articles/:articleId(\\d+)', updateArticle);
router.delete('/api/v1/articles/:articleId(\\d+)', deleteArticle);

router.get('/api/v1/categories/:categoryId(\\d+)/articles', fetchAllArticlesByCategory);
router.get('/api/v1/users/:userId(\\d+)/articles', fetchAllArticlesByUser);
router.post('/api/v1/articles/last', fetchLastestArticles);

//check schémas security input 
router.post('/api/v1/articles/search', searchAllArticles);

//~ Export router
export { router };
