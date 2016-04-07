var express = require('express');
var iniparser = require('iniparser');
var responseTime = require('response-time');
var errorHandler = require('errorhandler');
var morgan = require('morgan');
var fs = require('fs');
var app = express();
var router = express.Router();

var config = iniparser.parseSync('./config.ini');
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

app.set('view engine', 'jade');
app.set('views', './views');

app.use('/public', express.static('./public'));
app.use(morgan('combined', {stream: accessLogStream}));

if ('production' == app.get('env')) {
  router.get('/', function (req, res) {
    res.render('index', {title:config.title, message:config.message})
  });
}

if ('development' == app.get('env')) {
  router.get('/', function (req, res) {
    res.send('development mode test');
  });
}

router.get('/test', function (req, res) {
  res.send('works on all environment');
});

app.use('/ex05-App', router);

app.listen(config.port, function () {
  console.log('ex05 App is running on http://localhost:' + config.port + '/ex05-App');
});
