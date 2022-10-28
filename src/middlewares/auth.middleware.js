const jwtUtil = require('../utils/jwt.util');

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

module.exports = { validateToken, emptyFields };