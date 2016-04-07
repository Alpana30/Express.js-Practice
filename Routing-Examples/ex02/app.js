var express = require('express');
var routes = require('./routes');
var users = require('./routes/users');

var app = express();
var router = express.Router();
var port = 3000;

router.get('/', routes.index);
router.get('/users', users.list);

app.use('/ex02', router);

app.listen(port, function () {
  console.log('ex02 App is running on http://localhost:' + port + '/ex02');
});
