const { check } = require("express-validator");

const validateRequestBody = [
  check("title")
    .not()
    .isEmpty(),
  check("score")
    .isNumeric(),
  check("image")
    .optional()
    .isURL(),
  check("author")
    .not()
    .isEmpty(),
]

module.exports = {
    validateRequestBody
};
