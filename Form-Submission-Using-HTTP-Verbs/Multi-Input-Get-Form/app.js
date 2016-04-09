var express = require('express');

var port = 3000;
var app = express();
var router = express.Router();

app.set('view engine', 'jade');
app.set('views', './views');

app.use('/public', express.static('./public'));

router.get('/multi', function (req, res) {
  res.render('index', {title:'Multi-Search'});
});

router.get('/search-result', function (req, res) {
  var skills = req.query.skills;
  /*console.log('Skills:');
  skills.forEach(function (skill, i) {
    console.log((i+1) + ' . ' + skill);
  });*/
  res.json(req.query.skills);
});

app.use('/ex02', router);

app.listen(port, function () {
  console.log('ex02 App is running on http://localhost:' + port + '/ex02/multi');
});
