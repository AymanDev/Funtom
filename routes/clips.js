const express = require('express');
const router = express.Router();
const DBLoader = require('../src/DBLoader');

router.post('/', (req, res, next) => {
  const x = req.body.x;
  const y = req.body.y;
  const r = 0.0002;
  const clips = [];
  let msg = '';
  DBLoader.Clip.find({}, (err, results) => {
    msg += results + '\n';
    results.forEach(clip => {
      const xx0 = Math.abs(clip.position.x - x);
      const yy0 = Math.abs(clip.position.y - y);
      msg += clip + '\n';
      msg += xx0 + '/' + yy0;
      if (xx0 <= r && yy0 <= r) {
        clips.push(clip);
        msg += '/true';
      }
    });

    // return res.json({
    //   clips
    // });
  });

  return res.json({
    message: msg
  });
});

module.exports = router;
