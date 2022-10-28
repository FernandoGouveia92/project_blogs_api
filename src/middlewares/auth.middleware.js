const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  // console.log(`Whats up i am ${authorization}`);
   if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
   }
   const user = jwtUtil.decodeToken(authorization);
   if (user.type) {
    return res.status(401).json({ message: user.message });
   }
   req.user = user;
  next();
};

const emptyFields = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return ({ status: 400, message: 'Some required fields are missing' });
  }
  next();
};

const emailCheck = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};
module.exports = { validateToken, emptyFields, emailCheck };