const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const DBLoader = require('./src/DBLoader');
const indexRouter = require('./routes/index');
const soundsRouter = require('./routes/sound');

const app = express();

DBLoader.load();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/sounds', soundsRouter);

module.exports = app;
