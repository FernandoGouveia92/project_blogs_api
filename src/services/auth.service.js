const jwtUtil = require('../utils/jwt.util');
const { loginSchema } = require('../schemas/validations.schemas');

const { User } = require('../models');

const validateBody = (dataReceived) => {
  const { error, value } = loginSchema.validate(dataReceived);
  if (error) {
    return ({ type: 400, message: 'Some required fields are missing' });
  }
  return { 
    type: null,
    message: value,
  };
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return {
      type: 400,
      message: 'Invalid fields',
    };
  }
  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

const validateToken = (token) => {
  if (!token) {
    const e = new Error({ status: 401, message: 'Token é obrigatório' });
    throw e;
  }
  const userToken = jwtUtil.decodeToken(token);
  return userToken;
};

module.exports = {
  validateBody,
  validateLogin,
  validateToken,
};