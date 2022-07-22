//~ Import modules
import joi from 'joi';
const Joi = joi;

//~ User schema
const userSchema = Joi.object({
    username: Joi.string().required(),

    email: Joi.string().required()
    .pattern(new RegExp('^[-a-zA-Z0-9.-_]+@[\w-]+(?:\.[\w-]{2,4})$')),

    // Password Pattern 
    // Minimum 8 caractères - comprenant au moins un chiffre, une minuscule, une majuscule, un caractère spécial minimum
    password: Joi.string().required()
    .pattern(new RegExp('^(?=.*[0-9])(?=.*[-a-z])(?=.*[-A-Z]).{8,}$')),

    passwordConfirm: Joi.string().required()
    .pattern(new RegExp('^(?=.*[0-9])(?=.*[-a-z])(?=.*[-A-Z]).{8,}$')),

    is_active: Joi.boolean(),
    title: Joi.string(),
    presentation: Joi.string(),

    profile_pic_url: Joi.string()
    .pattern(new RegExp('((https?:\/\/)|(www.))[a-zA-Z0-9.@:%._+~#=]{1,}.[-a-zA-Z0-9()]{1,}\.[-a-z]{1,6}\b')),

    linkedin_url: Joi.string()
    .pattern(new RegExp('((https?:\/\/)|(www.))[a-zA-Z0-9.@:%._+~#=]{1,}.[-a-zA-Z0-9()]{1,}\.[-a-z]{1,6}\b')),

    github_url: Joi.string()
    .pattern(new RegExp('((https?:\/\/)|(www.))[a-zA-Z0-9.@:%._+~#=]{1,}.[-a-zA-Z0-9()]{1,}\.[-a-z]{1,6}\b')),

    instagram_url: Joi.string()
    .pattern(new RegExp('((https?:\/\/)|(www.))[a-zA-Z0-9.@:%._+~#=]{1,}.[-a-zA-Z0-9()]{1,}\.[-a-z]{1,6}\b')),

    portfolio_url: Joi.string()
    .pattern(new RegExp('((https?:\/\/)|(www.))[a-zA-Z0-9.@:%._+~#=]{1,}.[-a-zA-Z0-9()]{1,}\.[-a-z]{1,6}\b'))
    
})
    .min(1)
    .max(12);

export { userSchema };
