const authService = require('../services/auth.service');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  authService.validateToken(authorization);

  next();
};

const emptyFields = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return ({ status: 400, message: 'Some required fields are missing' });
  }
  
  next();
};

module.exports = { validateToken, emptyFields };