const express = require('express');

const { listPosts, createPost, updatePost, deletePost } = require("./posts.controller");

const router = express.Router();

router.get("", listPosts);
router.post("", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost)

module.exports = {
  postsRouter: router
}
