const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const DBLoader = require('./src/DBLoader');
const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const createClipRouter = require('./routes/create-clip');
const clipsRouter = require('./routes/clips');
const clipRouter = require('./routes/clip');

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
app.use('/clips', clipsRouter);
app.use('/clip', clipRouter);

module.exports = app;
