var express = require('express');
var multer = require('multer');
/*var bodyParser = require('body-parser');*/

var port = 3000;
var app = express();
var router = express.Router();

/*app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());*/
var upload = multer({ dest: './uploads'});

app.use('/public', express.static('./public'));

router.get('/signup', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

router.post('/signup-result', upload.single('photo'), function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  /*console.log(req.body);*/
  res.json({file: req.file, body: req.body});
});

app.use('/ex04', router);

app.listen(port, function () {
  console.log('ex04 App is running on http://localhost:' + port + '/ex04/signup');
});
