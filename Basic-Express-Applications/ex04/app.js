var express = require('express');
var responseTime = require('response-time');
var errorHandler = require('errorhandler');
var router = express.Router();
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.use('/public', express.static('./public'));
app.use(responseTime());
app.use(errorHandler());

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/hello', function (req, res) {
  res.send('<h1>Hello!</h1>');
});

router.get('/error-handler', function (req, res) {
  fail();
});

app.use('/app', router);

app.listen(3000, function () {
  console.log('ex04 App is running on http://localhost:' + 3000 + '/app');
});
