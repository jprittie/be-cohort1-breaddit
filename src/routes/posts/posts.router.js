const express = require('express');
const {
  validationErrorHandler
} = require('../../middleware/validation-error-handler');
const { validateRequestBody } = require('../../utils/validations');

const {
  listPosts,
  createPost,
  updatePost,
  deletePost
} = require('./posts.controller');

const router = express.Router();

router.get('', listPosts);
router.post('', validateRequestBody, validationErrorHandler, createPost);
router.put('/:id', validateRequestBody, validationErrorHandler, updatePost);
router.delete('/:id', deletePost);

module.exports = {
  postsRouter: router
};
