const mongoose = require('mongoose');
require('dotenv').config();

function DBLoader() {
  mongoose.connect('mongodb://' + process.env.MONGODB_USER + ':'
    + process.env.MONGODB_ADMIN_PASSWORD + '@' + 'localhost:27017/' + process.env.MONGODB_DATABASE, {useNewUrlParser: true}).catch(() => {
    console.error('Connect error');
  });
}

const User = mongoose.model('User', {
  username: String,
  password: String
});

exports.User = User;
exports.load = DBLoader;