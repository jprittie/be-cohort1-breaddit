const { validationResult } = require('express-validator');

const validationErrorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new Error(
      JSON.stringify({
        status: 'UNPROCESSABLE_ENTITY',
        message: errors.array()
      })
    );
  }
  next();
};

module.exports = {
  validationErrorHandler
};
