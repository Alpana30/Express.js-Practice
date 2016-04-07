var routes = require('./handlers');
var users = require('./handlers/users');

module.exports = function (router) {
  router.get('/', routes.index);
  router.get('/users', users.list);
}
