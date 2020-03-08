const express = require("express");

const { healthRouter } = require('../routes/health/health.router')
const { postsRouter } = require('../routes/posts/posts.router')

const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.use("/health", healthRouter);
router.use("/posts", postsRouter);

module.exports = router;
