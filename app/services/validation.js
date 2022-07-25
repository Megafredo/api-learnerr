//~ Import Debug 
import debug from 'debug'; 
const logger = debug('Schema');
//~ Import ErrorHandling
import { ErrorApi } from './errorHandler';

//~ Validation schema
const validation = {
    /**
     * 
     * @func schemaCustom
     * @description On récupère le schéma établi avec le module Joi pour la validation du body 
     * @returns 
     */
    body(schemaCustom) {
      //valid req.body format
      return function(req, res, next) {
        const { error } = schemaCustom.validate(req.body);
        if (error) {
          logger(error)
          throw new ErrorApi('Donnée non valide', req, res, 500);
        }
  
        next();
      };
    }
  };
  
  export { validation };