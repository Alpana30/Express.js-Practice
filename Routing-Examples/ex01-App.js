var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;

router.get('/', function (req, res) {
  res.send('<h1>Example Routes are desined in this App!</h1>');
});

router.get('/ab?cd', function (req, res) {
  res.send('ab?cd');
});

router.get('/ab+cd', function (req, res) {
  res.send('ab+cd');
});

router.get('/ab*cd', function (req, res) {
  res.send('ab*cd');
});

router.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e');
});

router.get('/users/:id', function (req, res) {
  res.send('USER ID: ' + req.params.id);
});

router.get('/file/:name.:ext', function (req, res) {
  res.send("File: " + req.params.name + '.' + req.params.ext.toLowerCase());
});

router.get('/feed/:format?', function (req, res) {
  if (req.params.format) {
    res.send('FORMAT: ' + req.params.format);
  } else {
    res.send('DEFAULT FORMAT');
  }
});

app.use('/ex01-App', router);

app.listen(port, function () {
  console.log('ex01 App is running on http://localhost:' + port + '/ex01-App');
})
