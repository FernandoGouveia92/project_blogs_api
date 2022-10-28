const categoryService = require('../services/category.service');
// const authService = require('../services/auth.service');

const newCategory = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await categoryService.newCatServ({ name });
  if (type) {
    return res.status(400).json({ message });
  }
  return res.status(201).json({ name });
};

module.exports = { 
  newCategory,
};