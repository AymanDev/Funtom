const express = require('express');
const router = express.Router();
const DBLoader = require('../src/DBLoader');

router.post('/', (req, res, next) => {
  const position = req.body.position;
  const r = 0.0002;
  const clips = [];

  DBLoader.Clip.find({}, (err, results) => {
    results.forEach(clip => {
      const xx0 = Math.abs(clip.position.x - position.x);
      const yy0 = Math.abs(clip.position.y - position.y);
      if (xx0 <= r && yy0 <= r) {
        clips.push(clip);
      }
    });

    return res.json({
      clips
    });
  });
});

module.exports = router;
