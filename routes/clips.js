const express = require('express');
const router = express.Router();
const DBLoader = require('../src/DBLoader');

router.post('/', (req, res, next) => {
  const x = req.body.x;
  const y = req.body.y;
  const friendUserId = req.body.friendUserId;
  const r = 0.00006;
  const clips = [];
  const filter = {};

  if (friendUserId) {
    filter.friendUserId = friendUserId;
  }

  DBLoader.Clip.find(filter, (err, results) => {
    results.forEach(clip => {
      const xx0 = Math.abs(clip.x - x);
      const yy0 = Math.abs(clip.y - y);
      if (xx0 <= r && yy0 <= r) {
        clips.push(clip);
      }
    });

    return res.json(clips);
  });
});

module.exports = router;
