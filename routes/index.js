const express = require('express');
const router = express.Router();
const DBLoader = require('../src/DBLoader');

/* GET home page. */
router.get('/', function (req, res, next) {
  const user = new DBLoader.User({
    username: 'Test',
    password: 'testpassword'
  });
  user.save().then(() => {
    res.json({
      message: 'db document saved'
    });
  }).catch(() => {
    res.json({
      message: 'db document save error'
    });

    res.json({
      resultMsg: 'work'
    });
  });
});

module.exports = router;
