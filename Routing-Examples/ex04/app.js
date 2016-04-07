var express = require('express');

var app = express();
var router = express.Router();
var router2013Jan = express.Router();
var port = 3000;

router.get('/', function (req, res) {
  res.send('Index of Articles!');
});

router.get('/new', function (req, res) {
  res.send('New Article');
});

router.get('/edit/:id', function (req, res) {
  res.send('Edit Article: ' + req.params.id);
});

router.get('/delete/:id', function (req, res) {
  res.send('Delete Article: ' + req.params.id);
});

router.get('/2013', function (req, res) {
  res.send('articles from 2013');
});

router2013Jan.get('/', function (req, res) {
  res.send('Articles from January 2013!');
});

router2013Jan.get('/nodejs', function (req, res) {
  res.send('Articles about NodeJs from January 2013!');
});

app.use('/ex04/article', router);
app.use('/ex04/article/2013/jan', router2013Jan);

app.listen(port, function () {
  console.log('ex04 App is running on http://localhost:' + port + '/ex04/article');
});
