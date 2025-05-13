import Joi from "joi";

export const createUrlSchema = Joi.object({
    originalUrl: Joi.string().uri().required().messages({
        "string.base": "Original URL must be a string",
        "string.empty": "Original URL cannot be empty",
    }),
});

export const showUrlSchema = Joi.object({
    id: Joi.string().required().messages({
        "string.base": "ID must be a string",
        "string.empty": "ID cannot be empty",
    }),
});

export const deleteUrlSchema = Joi.object({
    id: Joi.string().required().messages({
        "string.base": "ID must be a string",
        "string.empty": "ID cannot be empty",
    }),
});

export const redirectUrlSchema = Joi.object({
    shortUrl: Joi.string().required().messages({
        "string.base": "Short URL must be a string",
        "string.empty": "Short URL cannot be empty",
    }),
});