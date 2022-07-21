//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Main
import {router as mainRouter} from './main.js';
router.use(mainRouter);

//~ User
import { router as userRouter } from './user.js';
router.use(userRouter);

//~ Article
import { router as articleRouter } from './article.js';
router.use(articleRouter);

//~ Error Ticket
import { router as errorTicketRouter} from './errorTicket.js';
router.use(errorTicketRouter);

//~ Article comment
import { router as articleCommentRouter } from './articleComment.js';
router.use(articleCommentRouter);

//~ Error Comment
import { router as errorCommentRouter } from './errorComment.js';
router.use(errorCommentRouter);

//~ Category
import { router as categoryRouter} from './category.js';
router.use(categoryRouter);


//~ Export router
export { router };