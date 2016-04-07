var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Welcome!');
});

app.get('/hello.txt', function (req, res) {
  res.send('Whola!');
});

app.get('/contact', function (req, res) {
  res.end('Contact');
});

app.listen(3000, function () {
  console.log('ex05App is listening on port: ' + 3000);
});
