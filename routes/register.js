const express = require('express');
const router = express.Router();
const DBLoader = require('../src/DBLoader');

router.post('/', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  DBLoader.User.findOne({username}, (err, result) => {
    if (err) {
      return res.json({
        message: 'Database error!'
      });
    }

    if (result) {
      return res.json({
        message: 'Account already exists!'
      });
    }
    const user = new DBLoader.User({
      username,
      password
    });


    user.save().then((result => {
      console.log('Registered user: ' + result);
      return res.json({
        id: result._id
      });
    }));
  });
});

module.exports = router;
