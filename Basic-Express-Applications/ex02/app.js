var express = require('express');
var http = require('http');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.use('/public', express.static('./public'));

app.get('/', function (req, res) {
  res.render('index');
});

http.createServer(app).listen(3000, function () {
  console.log('ex02 App is running!');
});
