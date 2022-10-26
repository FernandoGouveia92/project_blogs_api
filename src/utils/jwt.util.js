require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '300m',
    algorithm: 'MSH256',
  });
  return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (_error) {
    const error = new Error('Token inválido');
    throw error;
  }
};

module.exports = {
  createToken,
  validateToken,
};