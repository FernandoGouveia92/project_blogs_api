// post schema (?)
const { BlogPost, User, Category } = require('../models');

// const newPostServ = () => {
//   const { error } =
// };

const getAllPostsServ = async () => {
  const allPosts = await BlogPost.findAll({
    attributes: { exclude: ['user_id'] },
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    }, {
      model: Category,
      as: 'categories',
    }],
  });
  if (!allPosts) {
    return ({ type: 400, message: 'Cant find all posts' });
  }

  return ({ type: null, message: allPosts });
};

module.exports = {
  // newPostServ,
  getAllPostsServ,
};