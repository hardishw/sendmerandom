angular.module("sendmerandom").controller("PaymentConformation",PaymentConformation);

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

function PaymentConformation() {
  var vm = this;

    var tx = $location.search().tx;
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
      vm.output = body;
    });
  }

}
