var express = require('express');
var bodyParser = require('body-parser');

var port = 3000;
var app = express();
var router = express.Router();

app.use('/public', express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

router.get('/signup', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

router.post('/signup-result', function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  console.log('Name: ' + name);
  console.log('Email: ' + email);
  res.json(req.body);
});

app.use('/ex03', router);

app.listen(port, function () {
  console.log('ex03 App is running on http://localhost:' + port + '/ex03');
});
