const { categorySchema } = require('../schemas/validations.schemas');
const { Category } = require('../models');

const newCatServ = async (name) => {
  console.log(`EU sou o argumento da função do service: ${name}`);
  const { error, value } = categorySchema.validate(name);
  if (error) {
    return ({ type: 400, message: '"name" is required' });
  }
  console.log(value);
  // const { name } = value;
  // console.log(name);
  const newCategory = await Category.create(name);
  console.log(newCategory);
  return ({ type: null, message: newCategory.dataValues });
};

module.exports = {
  newCatServ,
};