const express = require('express');
const router = express.Router();
const DBLoader = require('../src/DBLoader');

/* GET home page. */
router.get('/', function (req, res, next) {
  // const user = new DBLoader.User({
  //   username: 'Test',
  //   password: 'testpassword'
  // });

  DBLoader.User.findOne({username: 'Test'}, (err, result) => {
    if (err) {
      return res.json({
        message: 'User wasn\'t finded!'
      });
    }

    return res.json({
      res: result
    });
  });
  // user.save().then(() => {
  //   return res.json({
  //     message: 'db document saved'
  //   });
  // }).catch(() => {
  //   return res.json({
  //     message: 'db document save error'
  //   });
  //
  //   res.json({
  //     resultMsg: 'work'
  //   });
  // });
});

module.exports = router;
