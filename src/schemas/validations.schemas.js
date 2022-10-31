const Joi = require('joi');

const emailSchema = Joi.string().email().required();
const passwordSchema = Joi.string().min(6).required();

const loginSchema = Joi.object({
  email: emailSchema,
  password: passwordSchema,
});

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: emailSchema,
  password: passwordSchema,
  image: Joi.string(),
});

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = {
  loginSchema,
  userSchema,
  categorySchema,
  postSchema,
};