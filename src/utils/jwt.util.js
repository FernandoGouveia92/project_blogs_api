require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '300m',
    algorithm: 'HS256',
  });
  return token;
};

const decodeToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET, {
      expiresIn: '300m',
      algorithm: 'HS256',
    });
    return { type: null, data }; 
  } catch (_err) {
    return { type: 401, message: 'Expired or invalid token' };
  }
};

module.exports = {
  createToken,
  decodeToken,
};