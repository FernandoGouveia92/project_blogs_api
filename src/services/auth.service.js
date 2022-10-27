const jwtUtil = require('../utils/jwt.util');
const { loginSchema } = require('../schemas/validations.schemas');

const { User } = require('../models');

const validateBody = (params) => {
  const { error, value } = loginSchema.validate(params);

  if (error) throw error;

  return value;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    const e = new Error('Invalid fields');
    e.name = 'Erro não autorizado';
    throw e;
  }
  if (!user.email) {
    const e = new Error('Some required fields are missing');
    throw e;
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};
module.exports = {
  validateBody,
  validateLogin,
};