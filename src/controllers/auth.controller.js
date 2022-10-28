const authService = require('../services/auth.service');

const login = async (req, res) => {
  const { type, message } = authService.validateBody(req.body);

  if (type) {
    return res.status(400).json({ message });
  }
  const { email, password } = message;
  const token = await authService.validateLogin({ email, password });
  if (token.type) {
    return res.status(400).json({ message: token.message });
  }

  res.status(200).json({ token });
};

module.exports = {
  login,
};