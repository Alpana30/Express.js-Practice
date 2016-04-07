var secret = 'Fat';

module.exports = {
  name: 'Alpana',

  lower: function (input) {
    return input.toLowerCase();
  },

  upper: function (input) {
    return input.toUpperCase();
  },

  getName: function () {
    return this.name;
  },

  getSecret: function () {
    return secret;
  }

};
