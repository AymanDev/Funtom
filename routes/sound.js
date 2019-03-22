const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (request, file, response) => {
    response(null, './uploads/sounds');
  },
  filename: (request, file, response) => {
    const fileExtension = file.originalname.split(',')[1];
    response(null, file.fieldname + '-' + Date.now() + fileExtension);
  }
});
const upload = multer({storage});

router.post('/upload', upload.single('sound'), (req, res, next) => {
  res.json({
    message: req.file
  });
});

module.exports = router;
