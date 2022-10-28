const { userSchema } = require('../schemas/validations.schemas');

const { User } = require('../models');

const addUser = async (dataReceived) => {
  const { error, value } = userSchema.validate(dataReceived);
  if (error) {
    return ({ type: 400, message: error.details[0].message });
  }
  const { displayName, email, password, image } = value;
  console.log(email);

  const user = await User.findOne({ where: { email } });
  if (user) {
    return ({ type: 409, message: 'User already registered' });
  }

  const newUser = await User.create({ displayName, email, password, image });
  return ({ type: null, message: newUser.dataValues });
};

const getUser = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  if (!allUsers) {
    return ({ type: 400, message: 'Could not find all users' });
  }
  return ({ type: null, message: allUsers });
};

const getById = async (id) => {
  const johnDoe = await User.findOne({ 
    where: { id },
    attributes: { exclude: ['password'] },
  });
  if (!johnDoe) {
    return ({ type: 400, message: 'User does not exist' });
  }
  return ({ type: null, message: johnDoe });
};

module.exports = {
  addUser,
  getUser,
  getById,
};