const { categorySchema } = require('../schemas/validations.schemas');
const { Category } = require('../models');

const newCatServ = async (name) => {
  const { error } = categorySchema.validate(name);
  if (error) {
    return ({ type: 400, message: '"name" is required' });
  }
  const newCategory = await Category.create(name);
  return ({ type: null, message: newCategory.dataValues });
};

const getCategoryServ = async () => {
  const allCategories = await Category.findAll({
    attributes: { exclude: ['password'] },
  });
  if (!allCategories) {
    return ({ type: 400, message: 'Could not find all categories' });
  }
  return ({ type: null, message: allCategories });
};

module.exports = {
  newCatServ,
  getCategoryServ,
};