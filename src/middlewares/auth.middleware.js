const authService = require('../services/auth.service');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  authService.validateToken(authorization);

  next();
};

module.exports = { validateToken };