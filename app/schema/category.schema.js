//~ Import modules
import joi from 'joi';
const Joi = joi;

//~ Category schema
const categorySchema = Joi.object({
    name: Joi.string().required(),
    logo_svg: Joi.string()
})
    .min(1)
    .max(2);

export { categorySchema };
