const fs = require("fs");
const { promisify } = require("util");
const { validationResult } = require("express-validator");

const postsData = require("../../../db/posts.data.json");

const writeFile = promisify(fs.writeFile);

/* GET /posts controller */
const listPosts = (req, res) => {
  return res.json({
    data: postsData
  });
};

/* POST /posts controller */
const createPost = async (req, res) => {
  // Throw 422 if validation errors are found
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const id = new String(postsData.length + 1);
  const newPostsData = [ ...postsData, { id, ...req.body }]

  await writeFile("db/posts.data.json", JSON.stringify(newPostsData));
  res.status(201);
  return res.json({
    id,
    ...req.body
  });
}

/* PUT /posts/:id controller */
const updatePost = async (req, res) => {
  const { id } = req.params

  // Throw 404 if incorrect path
  const idCheck = postsData.find(post => post.id === id)
  if (!idCheck) {
    return res.status(404).json({ message: 'Invalid post id'})
  }

  // Throw 422 if validation errors are found
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }


  const updatedPostsData = postsData.reduce((acc, curr) => {
    if (curr.id === id) {
      return [ ...acc, req.body ]
    }

    return [ ...acc, curr ]
  }, [])

  await writeFile("db/posts.data.json", JSON.stringify(updatedPostsData));
  return res.json(req.body)
}

/* DELETE /posts/:id controller */
const deletePost = async (req, res) => {
  const { id } = req.params

  // Throw 404 if incorrect path
  const idCheck = postsData.find(post => post.id === id)
  if (!idCheck) {
    return res.status(404).json({ message: 'Invalid post id'})
  }

  const modifiedPostsData = postsData.filter(post => post.id !== id)

  await writeFile("db/posts.data.json", JSON.stringify(modifiedPostsData));
  return res.json({ id })
};


module.exports = {
  listPosts,
  createPost,
  updatePost,
  deletePost
}
