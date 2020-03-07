const express = require('express');

const { listPosts, createPost, deletePost } = require("./posts.controller");

const router = express.Router();

router.get("", listPosts);
router.post("", createPost);
router.delete("/:id", deletePost)

module.exports = {
  postsRouter: router
}
