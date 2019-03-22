const mongoose = require('mongoose');
require('dotenv').config();

function DBLoader() {
  mongoose.connect('mongodb://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASSWORD + '@mongodb:27017/funtom', {useNewUrlParser: true}).catch(() => {
    console.error('Connect error');
  });
}

const User = mongoose.model('User', {
  username: String,
  password: String
}, 'users');

const Clip = mongoose.model('Clip', {
  userId: String,
  soundFile: String,
  position: {
    x: Number,
    y: Number
  }
}, 'clips');

exports.User = User;
exports.Clip = Clip;
exports.load = DBLoader;