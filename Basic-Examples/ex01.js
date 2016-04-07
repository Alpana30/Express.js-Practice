var broadcast = function (msg, timeout, callback) {
  setTimeout(function () {
    console.log(msg);
    callback();
  }, timeout);
}

broadcast('Is there anybody out there?', 5000, function () {
  console.log('Message Sent');
});
