const express = require('express');
const router = express.Router();
const DBLoader = require('../src/DBLoader');

router.post('/', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  DBLoader.User.findOne({username}, (err, result) => {
    if (err) {
      return res.json({
        message: 'User wasn\'t found!'
      });
    }
    console.log('Logging as user: ' + result);
    if (result.password !== password) {
      return res.json({
        message: 'Wrong password!'
      });
    }
    return res.json({
      id: result._id
    });
  });

});

module.exports = router;
