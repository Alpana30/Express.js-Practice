var express = require('express');
var routes = require('./routes');

var port = 3000;
var app = express();
var router = express.Router();

routes(router);

app.use('/ex03', router);

app.listen(port, function () {
  console.log('ex03 App is running on http://localhost:' + port + '/ex03');
});
