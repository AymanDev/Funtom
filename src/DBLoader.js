const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/funtom', {useNewUrlParser: true});

const User = mongoose.model('User', {
  username: String,
  password: String
});

exports.User = User;