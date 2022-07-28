//~ Import modules
import joi from 'joi';
const Joi = joi;

//~ User schema SignIn
const userSignInSchema = Joi.object({
    email: Joi.string().pattern(new RegExp('^[-a-zA-Z0-9.-_]+@[\\w-]+(?:\\.[\\w-]{2,4})$')),

    password: Joi.string().pattern(new RegExp('^(?=.*[0-9])(?=.*[-a-z])(?=.*[-A-Z]).{8,}$'))
})
    .required()
    .max(2);

//~ User schema SignUp
const userSignUpSchema = Joi.object({
    username: Joi.string(),

    email: Joi.string().pattern(new RegExp('^[-a-zA-Z0-9.-_]+@[\\w-]+(?:\\.[\\w-]{2,4})$')),

    password: Joi.string().pattern(new RegExp('^(?=.*[0-9])(?=.*[-a-z])(?=.*[-A-Z]).{8,}$')),

    passwordConfirm: Joi.string().pattern(new RegExp('^(?=.*[0-9])(?=.*[-a-z])(?=.*[-A-Z]).{8,}$'))
})
    .required()
    .max(4);

//~ User schema Update
const userUpdateSchema = Joi.object({
    id: Joi.number(),

    username: Joi.string(),

    email: Joi.string().pattern(new RegExp('^[a-zA-Z0-9.-_]+@[\\w-]+(?:\\.[\\w-]{2,4})$')),

    // Password Pattern
    // Minimum 8 caractères - comprenant au moins un chiffre, une minuscule, une majuscule, un caractère spécial minimum
    password: Joi.string().pattern(new RegExp('^(?=.*[0-9])(?=.*[-a-z])(?=.*[-A-Z]).{8,}$')),

    passwordConfirm: Joi.string().pattern(new RegExp('^(?=.*[0-9])(?=.*[-a-z])(?=.*[-A-Z]).{8,}$')),

    title: Joi.string(),
    presentation: Joi.string(),

    profile_pic_url: Joi.string().pattern(new RegExp('((https?:\\/\\/)|(www.))[a-zA-Z0-9.@:%._+~#=]{1,}.[-a-zA-Z0-9()]{1,}\\.[-a-z]{1,6}\\b')),

    linkedin_url: Joi.string().pattern(new RegExp('((https?:\\/\\/)|(www.))[a-zA-Z0-9.@:%._+~#=]{1,}.[-a-zA-Z0-9()]{1,}\\.[-a-z]{1,6}\\b')),

    github_url: Joi.string().pattern(new RegExp('((https?:\\/\\/)|(www.))[a-zA-Z0-9.@:%._+~#=]{1,}.[-a-zA-Z0-9()]{1,}\\.[-a-z]{1,6}\\b')),

    instagram_url: Joi.string().pattern(new RegExp('((https?:\\/\\/)|(www.))[a-zA-Z0-9.@:%._+~#=]{1,}.[-a-zA-Z0-9()]{1,}\\.[-a-z]{1,6}\\b')),

    portfolio_url: Joi.string().pattern(new RegExp('((https?:\\/\\/)|(www.))[a-zA-Z0-9.@:%._+~#=]{1,}.[-a-zA-Z0-9()]{1,}\\.[-a-z]{1,6}\\b'))
})
    .min(1)
    .max(12);

//~ User schema InactivateSchema
const userInactivateSchema = Joi.object({
    id: Joi.number().integer(),
    is_active: Joi.boolean()
})
    .required()
    .max(2);

export { userSignInSchema, userSignUpSchema, userUpdateSchema, userInactivateSchema };
