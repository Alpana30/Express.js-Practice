var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.set('views', './views');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/say-hello', function (req, res) {
  res.render('hello');
});

app.get('/test', function (req, res) {
  res.end('This is a Test!');
});

app.listen(3000, function () {
  console.log('App is running on port: '+ 3000);
});
