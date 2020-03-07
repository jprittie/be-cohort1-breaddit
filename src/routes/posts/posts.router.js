const express = require('express');

const { listPosts, createPost } = require("./posts.controller");

const router = express.Router();

router.get("", listPosts);
router.post("", createPost);

module.exports = {
  postsRouter: router
}
