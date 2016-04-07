var express = require('express');
var routes = require('./ex06Routes');
var app = express();

routes(app);

app.listen(3000, function () {
  console.log('ex06App is listening on port: ' + 3000);
})
