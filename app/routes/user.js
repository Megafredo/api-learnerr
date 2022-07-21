//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { fetchAllUsers, fetchOneUser, updateUser, inactivateUser, doSignUp, doSignIn, doSignOut, refreshToken, fetchAllUserComments } from '../controllers/userController.js';


//~ Routes
router.get('/api/v1/users',fetchAllUsers);
router.get('/api/v1/users/:userId', fetchOneUser);
router.patch('/api/v1/users/:userId', updateUser);
router.put('/api/v1/users/:userId', inactivateUser);

router.post('/api/v1/signup', doSignUp);
router.post('/api/v1/signin', doSignIn);
router.get('/api/v1/signout', doSignOut);


router.get('/api/v1/users/:userId/comments', fetchAllUserComments);

router.post('/api/v1/refreshtoken', refreshToken);
//todo enlever refreshToken de userController car c'est dans service et il faudra l'importer ici

//~ Export router
export { router };