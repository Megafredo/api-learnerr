//~ Import modules
import joi from 'joi';
const Joi = joi;

//~ Error comment schema
const errorCommentSchema = Joi.object({

    content: Joi.string().required(),
    user_id: Joi.number().integer().required(),
    error_id: Joi.number().integer().required()

})
    .min(1)
    .max(3);

export { errorCommentSchema };