//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import { fetchAllUsers, fetchOneUser, updateUser, inactivateUser, doSignUp, doSignIn, doSignOut, fetchAllUserComments } from '../controllers/userController.js';
// import { refreshToken } from '../services/jsonWebToken.js';

//~ Import schema
import { validation } from '../services/validation.js';
import { userSignUpSchema,userSignInSchema, userInactivateSchema ,userUpdateSchema } from '../schema/user.schema.js';

//~ Routes
router.get('/api/v1/users',fetchAllUsers);
router.get('/api/v1/users/:userId', fetchOneUser);
router.patch('/api/v1/users/:userId', validation.body(userUpdateSchema), updateUser);
router.put('/api/v1/users/:userId', validation.body(userInactivateSchema),inactivateUser);

router.post('/api/v1/signup', validation.body(userSignUpSchema), doSignUp);
router.post('/api/v1/signin', validation.body(userSignInSchema), doSignIn);
router.get('/api/v1/signout', doSignOut);

router.get('/api/v1/users/:userId/comments', fetchAllUserComments);

// router.post('/api/v1/refreshtoken', refreshToken);
//todo enlever refreshToken de userController car c'est dans service et il faudra l'importer ici

//~ Export router
export { router };