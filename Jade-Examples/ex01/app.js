var express = require('express');
var router = express.Router();

var port = 3000;
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.use('/public', express.static('./public'));
app.locals.pretty = true;

router.get('/', function (req, res) {
  res.render('index', {title : 'Learning Jade'});
});

app.use('/ex01', router);

app.listen(port, function () {
  console.log('ex01 App is running on http://localhost:' + port + '/ex01');
});
