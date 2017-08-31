var request = require('request');

var _splitArray = function(input){
  var output

  if (input && input.length > 0){
    output = input.split("\n");
  } else {
    output = [];
  }

  return output;
}

module.exports.pdt = function (req, res) {
  var tx = req.params.tx;
  var auth = "ckGG2iC_2vrUMkqiuiv1nv37Gjoju3BrFtiWcWHPbLMDaMG2PGjht6de4Uy";
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
