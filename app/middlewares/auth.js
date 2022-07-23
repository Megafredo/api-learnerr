//~ Import module
import { ErrorApi } from '../services/errorHandler.js';

//~ Import Debug 
import debug from 'debug'; 
const logger = debug('Auth');

//~ Authentication
function auth(req, res, next) {
      console.log("Ici admin !", req.user)
      if (!req.user) throw new ErrorApi(`L'utilisateur n'est pas connecté`, req, res, 401);
  
      next();
  }

function admin(req, res, next) {
    
    if (req.user.role !== 'admin') throw new ErrorApi(`Accès interdit, l'utilisateur n'est pas un admin`, req, res, 403);

    next();
}
 
function author(req, res, next) { 
    if (req.user.role !== 'author') throw new ErrorApi(`Accès interdit, l'utilisateur n'est pas un auteur`, req, res, 403);

    next();
}

function user(req, res, next) { 
    console.log('MW ADMIN', req.user.role);
    if (req.user.role !== 'user') throw new ErrorApi(`Accès interdit, vous devez créer un compte pour accéder à cette donnée`, req, res, 403); 
    next();
}

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

export { auth , admin, author, user , userConnected};