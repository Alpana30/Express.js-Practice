module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send('<h1>Welcome!</h1>');
  });

  app.get('/hello.txt', function (req, res) {
    res.send('Whola!');
  });

  app.get('/contact', function (req, res) {
    res.end('Contact');
  });
}
