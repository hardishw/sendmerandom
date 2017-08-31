var request = require('request');

var pdt = function (res, req) {
  var tx = req.body.tx;
  var auth = "SciYlojZ6ClD9sHFE_-G0ujdIK5_4rDItZj3V7Jzpwd7lFWtNTDXffUfUsG";
  var endpoint = 'www.sandbox.paypal.com';

  var options = {
    form: {
      cmd: '_notify-synch',
      tx: tx,
      at: auth
    },
    headers: {
      Accept: '*/*'
    }
  };

  request.post('https://' + endpoint + '/cgi-bin/webscr', options, function(e, r, body) {
    res
      .status(200)
      .send(body);
    return console.log(body);
  });
}
