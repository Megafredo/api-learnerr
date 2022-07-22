//~ Import module
import { ErrorApi } from "./errorHandler.js";

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
          throw new ErrorApi(error, req, res);
        }
  
        next();
      };
    }
  };
  
  export { validation };