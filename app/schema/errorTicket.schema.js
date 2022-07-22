//~ Import modules
import joi from 'joi';
const Joi = joi;

//~ Error Ticket schema
const errorTicketSchema = Joi.object({

    error_snippet: Joi.string().required(),
    title: Joi.string().required(),
    abstract: Joi.string().required(),
    content: Joi.string().required(),
    user_id: Joi.integer(),
    status_id: Joi.integer(),
    error_comment_id: Joi.integer(),

})
    .min(1)
    .max(7);

export { errorTicketSchema };