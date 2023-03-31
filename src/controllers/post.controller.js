const postService = require('../services/post.service');

const findAllPosts = async (req, res) => {
  const { type, message } = await postService.getAllPostsServ();
  if (type) {
    return res.status(400).json({ message });
  }
  return res.status(200).json(message);
};

module.exports = {
  findAllPosts,
  // newPost,
};