//~ Import modules
import { ErrorApi } from '../services/errorHandler.js';
//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

//~ Import Datamapper
import { User } from '../datamappers/index.js';

//~ Security
import bcrypt from 'bcrypt';

//~ Controllers

async function fetchAllUsers(req, res) {
    try {
        const users = await User.findAll();

        if (!users) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

        res.status(200).json(users);
    } catch (err) {
        logger(err.message);
    }
}

async function fetchOneUser(req, res) {
    try {
        /* A way to get the userId from the url. */
        const userId = +req.params.userId;

        const oneUser = await User.findOne(userId);

        if (!oneUser) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

        res.status(200).json(oneUser);
    } catch (err) {
        logger(err.message);
    }
}

async function updateUser(req, res) {
    try {
        console.log('req.body: ', req.body);
        let { password, passwordConfirm } = req.body;

        //~ Is id a number ?
        const userId = +req.params.userId;
        if (isNaN(userId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

        //~ User exist ?
        const user = await User.findOne(userId);
        if (!user) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

        //~ Encrypt password if password exist
        if (password !== passwordConfirm) throw new ErrorApi({ message: `Les mots de passe ne sont pas identiques` }, req, res, 401);
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        //replace password in body
        req.body.password = password;

        //~ Update user
        await User.update(req.body);

        res.status(200).json(`Les informations ont bien été mis à jour`);
    } catch (err) {
        logger(err.message);
    }
}

async function inactivateUser(req, res) {
    try {
        //~ Is id a number ?
        const userId = +req.params.userId;
        if (isNaN(userId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

        //~ User exist ?
        const user = await User.findOne(userId);
        if (!user) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

      const { is_active } = req.body;
      req.body = {...req.body, id: userId}

      if (is_active === false) return await User.update(req.body), res.status(200).json(`L'utilisateur a bien été désactivé`);

      await User.update(req.body);

      res.status(200).json(`L'utilisateur a bien été activé'`);
      
    } catch (err) {
        logger(err.message);
    }
}

async function doSignUp(req, res) {
    try {
    } catch (err) {
        logger(err.message);
    }
}

async function doSignIn(req, res) {
    try {
    } catch (err) {
        logger(err.message);
    }
}

async function doSignOut(req, res) {
    try {
    } catch (err) {
        logger(err.message);
    }
}

async function fetchAllUserComments(req, res) {
    try {
    } catch (err) {
        logger(err.message);
    }
}

export { fetchAllUsers, fetchOneUser, updateUser, inactivateUser, doSignUp, doSignIn, doSignOut, fetchAllUserComments };
