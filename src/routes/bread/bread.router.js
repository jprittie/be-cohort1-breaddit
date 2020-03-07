const express = require('express');

const { listBreads, postBread } = require("./bread.controller");

const router = express.Router();

router.get("", listBreads);
router.post("", postBread);

module.exports = {
  breadRouter: router
}
