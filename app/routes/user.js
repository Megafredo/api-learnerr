//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { fetchAllUsers, fetchOneUser, updateUser, deleteUser, inactivateUser, doSignUp, doSignIn, doSignOut, fetchAllUserComments } from '../controllers/userController.js';
import { refreshToken } from '../services/jsonWebToken.js';

//~ Import schema
import { validation } from '../services/validation.js';
import { userSignUpSchema, userSignInSchema, userInactivateSchema, userUpdateSchema } from '../schema/user.schema.js';


//~ Routes
router.get('/api/v1/users', fetchAllUsers);
router.get('/api/v1/users/:userId(\\d+)', fetchOneUser);
router.patch('/api/v1/users/:userId(\\d+)', validation.body(userUpdateSchema), updateUser);
router.delete('/api/v1/users/:userId(\\d+)', deleteUser);

router.put('/api/v1/users/:userId(\\d+)', validation.body(userInactivateSchema),inactivateUser);
router.post('/api/v1/signup', validation.body(userSignUpSchema), doSignUp);
router.post('/api/v1/signin', validation.body(userSignInSchema), doSignIn);
router.get('/api/v1/signout', doSignOut);

router.get('/api/v1/users/:userId(\\d+)/comments', fetchAllUserComments);

router.post('/api/v1/refreshtoken', refreshToken);

//~ Export router
export { router };