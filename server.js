var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var ObjectId = require("mongodb").ObjectId;
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/questiondb", function(err, client){
  if(err){
    return console.log(err);
  }
  db = client.db("questiondb");
  console.log("Connected to DB");
  app.listen(3001, function () {
  console.log("App running on port " + this.address().port);
  });
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get('/', function(req, res){
  res.sendFile(__dirname + "client/build/index.html");
});
app.get("/questions", function(req, res){
  db.collection("questions").find().toArray(function(err, results){
	  if(err){
		return console.log(err);
	  }
	  res.json(results);
	});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
