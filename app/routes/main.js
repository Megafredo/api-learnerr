//~ Import Router 
import { Router } from 'express';
const router = Router();

import { swaggerDocsLink } from '../controllers/mainController.js';

//~ Home
router.get('/', swaggerDocsLink);

//~ Export router
export { router };