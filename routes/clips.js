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
      const xx0 = Math.pow(clip.x - x, 2);
      const yy0 = Math.pow(clip.y - y, 2);
      if (xx0 + yy0 <= r * r) {
        clips.push(clip);
      }
    });

    return res.json(clips);
  });
});

module.exports = router;
