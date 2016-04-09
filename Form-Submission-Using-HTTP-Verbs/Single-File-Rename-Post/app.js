var express = require('express');
var multer = require('multer');

var port = 3000;
var app = express();
var router = express.Router();

app.use('/public', express.static('./public'))

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/public/uploads');
  },
  filename: function (req, file, cb) {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var curr_date = day + '.' + month + '.' + year;
    cb(null, file.fieldname + '-' + curr_date);
  }
});

var upload = multer({ storage: storage});

router.get('/signup', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

router.post('/signup-result', upload.single('photo'), function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  res.json({body: req.body, file: req.file});
});

app.use('/ex05', router);

app.listen(port, function () {
  console.log('ex05 App is running on http://localhost:' + port + '/ex05/signup');
});
