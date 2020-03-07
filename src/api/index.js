const express = require("express");

const { healthRouter } = require('../routes/health/health.router')
const { postsRouter } = require('../routes/posts/posts.router')

const router = express.Router();
router.use("/health", healthRouter);
router.use("/posts", postsRouter);

module.exports = router;
