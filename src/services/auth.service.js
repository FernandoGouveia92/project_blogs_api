// const Joi = require('joi');
// const jwtUtil = require('../utils/jwt.util');

// const { User } = require('../models');

// const validateBody = (params) => {
//   const schema = Joi.object({
//     email: Joi.string().email().required(),
//     password: Joi.string().required(),
//   });
//   const value = schema.validate(params);
//   if (!value) {
//     return { status: 400, message: 'Some required fields are missing' };
//   }
//   return value;
// };

// const validateLogin = async ({ email, password }) => {
//   const user = await User.findOne({ where: { email } });

//   if (!user || user.password !== password) {
//     const e = new Error('Invalid fields');
//     e.name = 'UnauthorizedError';
//     throw e;
//   }
//   const { password: _, ...userWithoutPassword } = user.dataValues;
//   // password é passado com valor de  _ para que esse dado não possa ser vazado, essa ação é necessária para na hora da construção do token, não conter a senha do usuário, pois, pode fazer engenharia reversa e obter a senha.
//   const token = jwtUtil.createToken(userWithoutPassword);

//   return token;
// };

// const validateToken = (token) => {
//   if (!token) {
//     const e = new Error('Token é obrigatório');
//     throw e;
//   }

//   const user = jwtUtil.validateToken(token);
//   return user;
// };

// module.exports = {
//   validateBody,
//   validateLogin,
//   validateToken,
// };