var request = require('request');

var pdt = function (res, req) {
  var tx = req.body.tx;
  var auth = "AaWU229RL4bKZcncKJzMcgl79xZgAWND9VWlUwSotSS3Hb-HcKULi1nho8_HRFdDvqBgyBkokp1CYpxw";
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
    return console.log(body);
  });
}
