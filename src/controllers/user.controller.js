const userService = require('../services/user.service');
const authService = require('../services/auth.service');

const newUser = async (req, res) => {
  const { type, message } = await userService.addUser(req.body);
  console.log({ type, message });
  if (type) {
    return res.status(type).json({ message });
  }
  const { email, password } = message;
  const token = await authService.validateLogin({ email, password });
  return res.status(201).json({ token });
};

module.exports = { newUser };