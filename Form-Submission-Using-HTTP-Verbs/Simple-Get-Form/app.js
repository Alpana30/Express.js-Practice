var express = require('express');

var port = 3000;
var app = express();
var router = express.Router();

app.set('view engine', 'jade');
app.set('views', './views');

app.use('/public', express.static('./public'));

router.get('/search', function (req, res) {
  res.render('index', {title: 'Search'});
});

router.get('/search-result', function (req, res) {
  var name = req.query.name;
  var source = req.query.source;
  console.log('Searching For: ' + name);
  console.log('From: ' + source);
  res.send('<h3>Search Result for '+ name +' from '+ source +' are as follows: </h3>');
});

app.use('/ex01', router);

app.listen(port, function () {
  console.log('ex01 App is running on http://localhost:' + port + '/ex01');
});
