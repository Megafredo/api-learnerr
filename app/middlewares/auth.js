//~ Import module
import { ErrorApi } from '../services/errorHandler.js';

//~ Import Debug
import debug from 'debug';
const logger = debug('Auth');

//~ Authentication
function auth(req, res, next) {
  if (!req.user && req.user?.isactive === false) throw new ErrorApi(`L'utilisateur n'est pas connecté`, req, res, 401);

  next();
}

function role(req, res, next) {
  if (req.user.role === 'admin' || req.user.role === 'author') {
    next();
  }
  
  throw new ErrorApi(`Accès interdit !`, req, res, 403);
}

function admin(req, res, next) {
    if (req.user.role !== 'admin') throw new ErrorApi(`Accès interdit, l'utilisateur n'est pas un admin`, req, res, 403);
    next();
}


// function author(req, res, next) {
//   if (req.user.role !== 'author') throw new ErrorApi(`Accès interdit, l'utilisateur n'est pas un auteur`, req, res, 403);

//   next();
// }

//~ Keep user connected
function userConnected(req, res, next) {
  try {
    // console.log("res.locals: ", res.locals.user);
    // req.user ? (res.locals.user = req.user) : (res.locals.user = false);
    // console.log("res.locals: ", res.locals.user);
    next();
  } catch (err) {
    logger(err.message);
  }
}

export { auth, admin, role, userConnected };
