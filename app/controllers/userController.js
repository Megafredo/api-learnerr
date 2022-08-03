//~ Import modules
import { ErrorApi } from '../services/errorHandler.js';
//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

//~ Import Datamapper
import { User } from '../datamappers/index.js';

//~ Security
import bcrypt from 'bcrypt';

//~ Authorization
import { generateAccessToken, generateRefreshToken } from '../services/jsonWebToken.js';

//~ Controllers

async function fetchAllUsers(req, res) {
    try {
        const users = await User.findAll();

        if (!users) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

        return res.status(200).json(users);
    } catch (err) {
        logger(err.message);
    }
}

async function fetchOneUser(req, res) {
    try {
        const userId = +req.params.userId;

        const oneUser = await User.findOne(userId);

        if (!oneUser) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

        return res.status(200).json(oneUser);
    } catch (err) {
        logger(err.message);
    }
}

async function updateUser(req, res) {
    try {
        let { password, passwordConfirm } = req.body;

        //~ Is id a number ?
        const userId = +req.params.userId;
        if (isNaN(userId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

        //~ User exist ?
        const user = await User.findOne(userId);
        if (!user) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

        //~ User already exist ?
        const userExist = await User.findUser(req.body.email);
        if (userExist) throw new ErrorApi(`L'email existe déjà !`, req, res, 401);

        //~ Encrypt password if password exist
        if (password) {
            if (password !== passwordConfirm) throw new ErrorApi(`Les mots de passe ne sont pas identiques`, req, res, 401);

            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password, salt);
            // replace password in body
            req.body.password = password;
        }

        if (req.user.id !== userId) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

        req.body = { ...req.body, id: userId };

        //~ Update user
        await User.update(req.body);

        return res.status(200).json(`Les informations ont bien été mis à jour`);
    } catch (err) {
        logger(err.message);
    }
}

async function deleteUser(req, res) {
    try {
        //~ Is id a number ?
        const userId = +req.params.userId;
        if (isNaN(userId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

        //~ User exist ?
        const user = await User.findOne(userId);
        if (!user) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

        if (req.user.id !== userId) throw new ErrorApi(`Les informations fournies ne permettent aucune modification`, req, res, 403);

        await User.delete(userId);

        //check
        req.user = null;
        req.session.destroy();

        return res.status(200).json(`Le compte a bien été supprimé`);
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

        //~ Add id in body
        const { is_active } = req.body;
        req.body = { ...req.body, id: userId };

        if (is_active === undefined) throw new ErrorApi(`L'information is_active doit être renseigné`, req, res, 400);
        // if (req.user.role === 'admin') throw new ErrorApi(`L'administrateur ne peut pas être bloqué`, req, res, 400);

        //~ Update user
        if (is_active === false) return await User.update(req.body), res.status(200).json(`L'utilisateur a bien été désactivé`);

        // await User.update(req.body);

        return res.status(200).json(`L'utilisateur a bien été activé`);
    } catch (err) {
        logger(err.message);
    }
}

async function doSignUp(req, res) {
    try {
        let { email, password, passwordConfirm } = req.body;

        //~ User already exist ?
        const userExist = await User.findUser(email);

        if (userExist) throw new ErrorApi(`L'utilisateur existe déjà !`, req, res, 401);

        //~ Encrypt password if password exist
        if (password !== passwordConfirm) throw new ErrorApi(`Les mots de passe ne sont pas identiques`, req, res, 401);
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        //replace password in body
        req.body.password = password;

        //~ Create user
        await User.create(req.body);
        return res.status(201).json(`L'utilisateur a bien été créé`);
    } catch (err) {
        logger(err.message);
    }
}

async function doSignIn(req, res) {
    try {
        let { email, password } = req.body;

        //~ User already exist ?
        const userExist = await User.findUserIdentity({ email });

        if (!userExist || userExist.isactive === false) throw new ErrorApi(`L'utilisateur non reconnu !`, req, res, 401);

        //~ Security
        const validPwd = await bcrypt.compare(password, userExist.password);

        if (!validPwd) throw new ErrorApi(`L'email ou le mot de passe n'est pas valide`, req, res, 401);

        const { ['password']: remove, ...user } = userExist;

        //~ Authorization JWT
        let accessToken = generateAccessToken({ user });
        let refreshToken = generateRefreshToken({ user }, req);

        delete user['isActive'];

        let userIdentity = { ...user, accessToken, refreshToken };

        return res.status(200).json(userIdentity);
    } catch (err) {
        logger(err.message);
    }
}

async function doSignOut(req, res) {
    try {
        req.user = null;
        req.session.destroy();

        return res.status(204).json(`L'utilisateur a bien été déconnecté`);
    } catch (err) {
        logger(err.message);
    }
}

async function fetchPanelUser(req, res) {
    try {
        //~ Is id a number ?
        const userId = +req.params.userId;
        if (isNaN(userId)) throw new ErrorApi(`L'id doit être un nombre`, req, res, 400);

        //~ User exist ?
        const user = await User.findOne(userId);
        if (!user) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

        const userDetails = await User.findAllDetails(userId);

        return res.status(200).json(userDetails.u_detailed);
    } catch (err) {
        logger(err.message);
    }
}

export { fetchAllUsers, fetchOneUser, updateUser, deleteUser, inactivateUser, doSignUp, doSignIn, doSignOut, fetchPanelUser };
