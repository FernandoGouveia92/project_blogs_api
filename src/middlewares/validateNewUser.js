const { User } = require('../models');

const validNewUser = (req, res, next) => {
  const { displayName, email, password } = req.body;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (displayName.length < 8) {
    return ({ status: 400, message: '"displayName" length must be at least 8 characters long' });
  }
  if (!email.match(emailRegex)) {
    return ({ status: 400, message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return ({ status: 400, message: '"password" length must be at least 6 characters long' });
  }
  if ()
  next();
};
