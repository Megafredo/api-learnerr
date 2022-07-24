//~ Import modules
import joi from 'joi';
const Joi = joi;

//~ Error Ticket schema
const errorTicketSchema = Joi.object({
    error_snippet: Joi.string().required(),
    title: Joi.string().required(),
    abstract: Joi.string().required(),
    content: Joi.string().required(),
    user_id: Joi.number().integer().required(),
    status_id: Joi.number().integer().required(),
    error_comment_id: Joi.number().integer()
})
.min(1)
.max(7);

//~ Update Error Ticket schema
const errorTicketUpdateSchema = Joi.object({
    error_snippet: Joi.string(),
    title: Joi.string(),
    abstract: Joi.string(),
    content: Joi.string(),
    user_id: Joi.number().integer().required(),
    status_id: Joi.number().integer(),
    error_comment_id: Joi.number().integer()
})
    .min(1)
    .max(7);

export { errorTicketSchema, errorTicketUpdateSchema };
