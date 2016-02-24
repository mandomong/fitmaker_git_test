var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// ----- Loading router-Level middleware modules ----- //
var index = require('./routes/index');
var users = require('./routes/users');

var exercisetype = require('./routes/exercisetype');
var rankfriends = require('./routes/rankfriends');
var records = require('./routes/records');
var projects = require('./routes/projects');

var app = express();
app.set('env', 'production');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//3. express 초기화
app.use(session({
  "secret": "i2+oCQts4kysnjc67CkdwuO3jSlY6r/cJDzTr11qUUg=",
  "cookie": { "maxAge": 86400000 },
  "resave": true,
  "saveUninitialized": true
}))

//4. passport 초기화, 세션 - 순서에 민감하다 !
//app.use(passport.initialize());
//app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/auth', auth);
//app.use('/members', member);


// ------ mount points configuration ------ //
// ------ Mapping mount points with router-Level middleware modules ------ //
app.use('/', index);
app.use('/users', users);
app.use('/exercisetype',exercisetype);
app.use('/rankfriends',rankfriends);
app.use('/records',records);
app.use('/projects', projects);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
