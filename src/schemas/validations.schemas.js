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

module.exports = {
  loginSchema,
  userSchema,
};