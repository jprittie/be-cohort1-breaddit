const fs = require("fs");
const { promisify } = require("util");

const postsData = require("../../../db/posts.data.json");

const writeFile = promisify(fs.writeFile);

const listPosts = (req, res) => {
  return res.json({
    data: postsData
  });
};

const createPost = async (req, res) => {
  const id = new String(postsData.length + 1);
  const newPostsData = [ ...postsData, { id, ...req.body }]

  await writeFile("db/posts.data.json", JSON.stringify(newPostsData));
  res.status(201);
  return res.json({
    id,
    ...req.body
  });
}

const deletePost = async (req, res) => {
  const { id } = req.params
  const modifiedPostsData = postsData.filter(post => post.id !== id)

  await writeFile("db/posts.data.json", JSON.stringify(modifiedPostsData));
  return res.json({ id })
};


module.exports = {
  listPosts,
  createPost,
  deletePost
}
