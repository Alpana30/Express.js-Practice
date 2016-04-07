exports.index = function (req, res) {
  res.send('GET INDEX of Users!');
}

exports.new = function (req, res) {
  res.send('GET Form for NEW User');
}

exports.create = function (req, res) {
  res.send('POST Form for New User');
}

exports.show = function (req, res) {
  res.send('GET Show User: ' + req.params.user);
}

exports.edit = function (req, res) {
  res.send('GET Form to EDIT User: ' + req.params.user);
}

exports.update = function (req, res) {
  res.send('PUT Form of Edit User: ' + req.params.user);
}

exports.delete = function (req, res) {
  res.send('DELETE User: ' + req.params.user);
}
