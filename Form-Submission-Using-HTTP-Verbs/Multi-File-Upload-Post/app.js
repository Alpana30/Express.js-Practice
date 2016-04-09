var express = require('express');
var multer = require('multer');

var port = 3000;
var app = express();
var router = express.Router();

app.use('/public', express.static('./public'))

var upload = multer({ dest: './public/uploads' });

router.get('/signup', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

router.post('/signup-result', upload.array('files', 4), function (req, res) {
  res.json({body: req.body, files: req.files});
});

app.use('/ex06', router);

app.listen(port, function () {
  console.log('ex06 App is running on http://localhost:' + port + '/ex06/signup');
});
