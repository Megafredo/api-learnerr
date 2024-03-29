//~ Import module
import { ErrorApi } from '../services/errorHandler.js';

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

export { auth, admin, role };
