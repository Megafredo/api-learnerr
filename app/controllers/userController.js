//~ Import modules
import { ErrorApi } from '../services/errorHandler.js';
//~ Import Debug
import debug from 'debug';
const logger = debug('mainController');

import { user } from '../datamappers/index.js';

//~ Controllers

async function fetchAllUsers(req, res) {
  try {
    const users = await user.findAll();

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
  

    const oneUser = await user.findOne(userId);

    if (!oneUser) throw new ErrorApi(`Aucun utilisateur trouvé`, req, res, 400);

    res.status(200).json(oneUser);
  } catch (err) {
    logger(err.message);
  }
}

async function updateUser(req, res) {
  try {
  } catch (err) {
    logger(err.message);
  }
}

async function inactivateUser(req, res) {
  try {
    
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

async function refreshToken(req, res) {
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

export { fetchAllUsers, fetchOneUser, updateUser, inactivateUser, doSignUp, doSignIn, doSignOut, refreshToken, fetchAllUserComments };
