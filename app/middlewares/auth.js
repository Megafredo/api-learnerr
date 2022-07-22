//~ Import module
import { ErrorApi } from '../services/errorHandler.js';

//~ Import Debug 
import debug from 'debug'; 
const logger = debug('Auth');

//~ Authentication
function auth(req, res, next) {
      if (!req.session.token) throw new ErrorApi(`L'utilisateur n'est pas connecté`, req, res, 401);
  
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
    if (req.user.role !== 'user') throw new ErrorApi(`Accès interdit, vous devez créer un compte accéder à cette donnée`, req, res, 403); 
    next();
}

export { auth , admin, author, user };