//~ Import modules
import joi from 'joi';
const Joi = joi;

//~ Article schema
const articleSchema = Joi.object({

    title: Joi.string().required(),
    abstract: Joi.string().required(),
    content: Joi.string().required(),
    user_id: Joi.number().integer(),
    status_id: Joi.number().integer(),

})
    .min(1)
    .max(5);

export { articleSchema };