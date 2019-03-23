const express = require('express');
const router = express.Router();
const DBLoader = require('../src/DBLoader');

router.post('/', (req, res, next) => {
  const _id = req.body.id;

  DBLoader.Clip.find({_id}, (err, clip) => {
    if (err) {
      return res.json({
        message: 'Error while searching clip'
      });
    }

    if (clip) {
      return res.json(clip);
    }
    return res.json({
      message: 'Can\'t find clip with such id'
    });
  });

});

module.exports = router;
