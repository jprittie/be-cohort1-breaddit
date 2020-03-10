const { check } = require('express-validator');

// TODO: API spec seems to require that one of "text" or "image" fields is required in request body,
// but so far I have not been able to get express-validator's oneOf method to work

const validateRequestBody = [
  check('title')
    .not()
    .isEmpty()
    .withMessage('Title is required'),
  check('score')
    .isNumeric()
    .withMessage('Score must be a number'),
  check('image')
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage('Image must be a valid URL'),
  check('author')
    .not()
    .isEmpty()
    .withMessage('Author is required')
];

module.exports = {
  validateRequestBody
};
