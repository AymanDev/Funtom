const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const DBLoader = require('./src/DBLoader');
const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const createClipRouter = require('./routes/create-clip');

const app = express();

DBLoader.load();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/create-clip', createClipRouter);

module.exports = app;
