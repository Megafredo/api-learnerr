//~ Import Router
import { Router } from 'express';
const router = Router();

//~ Import
import { createCategory, fetchAllCategories, deleteCategory, fetchAllCategoriesByArticle, fetchAllCategoriesByErrorTicket } from '../controllers/categoryController.js';

//~ Authorization
import { validateToken } from '../middlewares/validateToken.js';
import { auth, admin } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/categories',[validateToken, auth, admin], createCategory);
router.get('/api/v1/categories', fetchAllCategories);
router.delete('/api/v1/categories/:categoryId(\\d+)',[validateToken, auth, admin], deleteCategory);

router.get('/api/v1/articles/:articleId(\\d+)/categories', fetchAllCategoriesByArticle);
router.get('/api/v1/errors/:errorId(\\d+)/categories', fetchAllCategoriesByErrorTicket);

//~ Export router
export { router };
