//~ Import modules
import joi from 'joi';
const Joi = joi;

//~ Article comment schema
const articleCommentSchema = Joi.object({

    content: Joi.string().required(),
    user_id: Joi.integer().required(),
    article_id: Joi.integer().required()

})
    .min(1)
    .max(3);

export { articleCommentSchema };