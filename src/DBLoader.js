const mongoose = require('mongoose');
require('dotenv').config();

function DBLoader() {
  // let MONGO_URL = 'mongodb://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASSWORD + '@mongodb:27017/funtom';
  // MONGO_URL = 'mongodb://localhost:27017/funtom';
  let MONGO_URL = process.env.MONGODB_URI;
  mongoose.connect(MONGO_URL, {useNewUrlParser: true}).catch(() => {
    console.error('Connect error');
  });
}

const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String
}), 'users');

const Clip = mongoose.model('Clip', new mongoose.Schema({
  name: String,
  userId: String,
  soundFile: String,
  x: Number,
  y: Number,
  friendUserId: String
}), 'clips');

exports.User = User;
exports.Clip = Clip;
exports.load = DBLoader;
