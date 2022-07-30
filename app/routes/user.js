//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { fetchAllUsers, fetchOneUser, updateUser, deleteUser, inactivateUser, doSignUp, doSignIn, doSignOut, fetchPanelUser } from '../controllers/userController.js';
import { refreshToken } from '../services/jsonWebToken.js';

// //~ Import schema
// import { validation } from '../services/validation.js';
// import { userSignUpSchema, userSignInSchema, userInactivateSchema, userUpdateSchema } from '../schema/user.schema.js';

// //~ Authorization
// import { validateToken } from '../middlewares/validateToken.js';
// import { auth, admin } from '../middlewares/auth.js';

//~ Routes
router.post('/api/v1/signup', doSignUp);
router.post('/api/v1/signin', doSignIn);
router.get('/api/v1/signout', doSignOut);

router.get('/api/v1/users', fetchAllUsers);
router.get('/api/v1/users/:userId(\\d+)', fetchOneUser);
router.patch('/api/v1/users/:userId(\\d+)', updateUser);
router.delete('/api/v1/users/:userId(\\d+)', deleteUser);

router.put('/api/v1/users/:userId(\\d+)', inactivateUser);

router.get('/api/v1/users/:userId(\\d+)/panel', fetchPanelUser);

router.post('/api/v1/refreshtoken', refreshToken);

//~ Export router
export { router };