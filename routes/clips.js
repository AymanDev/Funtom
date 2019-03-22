const express = require('express');
const router = express.Router();
const DBLoader = require('../src/DBLoader');

router.post('/', (req, res, next) => {
  const x = req.body.x;
  const y = req.body.y;
  const r = 0.0002;
  const clips = [];

  DBLoader.Clip.find({}, (err, results) => {
    results.forEach(clip => {
      const xx0 = Math.abs(clip.position.x - x);
      const yy0 = Math.abs(clip.position.y - y);
      if (xx0 <= r && yy0 <= r) {
        clips.push(clip);
      }
    });

    return res.json({
      clips
    });
  });

  return res.json({
    message: 'Error!'
  });
});

module.exports = router;
