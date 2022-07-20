//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { fetchAllUsers, fetchOneUser, updateUser, deleteUser, doSignUp, doSignIn, doSignOut, refreshToken, fetchAllUserComments } from '../controllers/userController.js';


//~ Routes
router.get('/api/v1/users',fetchAllUsers);
router.get('/api/v1/users/:userId', fetchOneUser);
router.patch('/api/v1/users/:userId', updateUser);
router.delete('/api/v1/users/:userId', deleteUser);

router.post('/api/v1/signup', doSignUp);
router.post('/api/v1/signin', doSignIn);
router.get('/api/v1/signout', doSignOut);

router.post('/api/v1/refreshtoken', refreshToken);

router.get('/api/v1/users/:userId/comments', fetchAllUserComments);


//~ Export router
export { router };