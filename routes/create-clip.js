const express = require('express');
const router = express.Router();
const DBLoader = require('../src/DBLoader');
const fs = require('fs');

router.post('/', (req, res, next) => {
  const userId = req.body.userId;
  const soundFile = req.body.soundFile;
  const x = req.body.x;
  const y = req.body.y;

  const clip = new DBLoader.Clip({
    userId,
    soundFile,
    x,
    y
  });

  clip.save().then((result) => {
    console.log('Creating clip:' + result);
    return res.json({
      id: result._id
    });
  }).catch(() => {
    return res.json({
      message: 'Clip saving error!'
    });
  });
});

module.exports = router;
