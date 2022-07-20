//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { createArticle, fetchAllArticles, fetchOneArticle, updateArticle, deleteArticle, fetchAllDraftsByArticle, fetchAllArticlesByCategory, fetchAllArticlesByUser, fetchLastestArticles } from '../controllers/articleController.js';


//~ Routes
router.post('/api/v1/articles', createArticle);
router.get('/api/v1/articles', fetchAllArticles);
router.get('/api/v1/articles/:articleId', fetchOneArticle);
router.patch('/api/v1/articles/:articleId', updateArticle);
router.delete('/api/v1/articles/:articleId', deleteArticle);

router.post('/api/v1/articles/:articleId/drafts', fetchAllDraftsByArticle);
router.get('/api/v1/categories/:categoryId/articles', fetchAllArticlesByCategory);
router.get('/api/v1/users/:userId/articles', fetchAllArticlesByUser);
router.get('/api/v1/articles/last', fetchLastestArticles);


//~ Export router
export { router };