const express = require('express');
const router = express.Router();
const DBLoader = require('../src/DBLoader');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json('Hello!');
});

module.exports = router;
