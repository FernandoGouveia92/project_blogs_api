const userService = require('../services/user.service');
const authService = require('../services/auth.service');

const newUser = async (req, res) => {
  const { type, message } = await userService.addUser(req.body);
  if (type) {
    return res.status(type).json({ message });
  }
  const { email, password } = message;
  const token = await authService.validateLogin({ email, password });
  return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const { type, message } = await userService.getUser();
  if (type) {
    return res.status(401).json({ message });
  }
  return res.status(200).json(message);
};

module.exports = { newUser, getUsers };