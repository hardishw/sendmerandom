angular.module("sendmerandom").controller("PaymentConformation",PaymentConformation);

var _splitArray = function(input){
  var output

  if (input && input.length > 0){
    output = input.split("\n");
  } else {
    output = [];
  }

  return output;
}

function PaymentConformation($http,$location) {
  var vm = this;
  var tx = $location.search().tx;

  $http.get("/api/pdt/" + tx).then(function (response) {
    vm.output = response.data.split("\n");
  });
}
