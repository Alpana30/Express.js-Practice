var express = require('express');
var resource = require('express-resource');

var port = 3000;
var app = express();
app.resource('users', require('./users'));

app.listen(port, function () {
  console.log('ex05 App is running on http://localhost:' + port + '/users');
});
