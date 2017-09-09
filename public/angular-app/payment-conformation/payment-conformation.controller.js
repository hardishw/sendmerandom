angular.module("sendmerandom").controller("PaymentConformation",PaymentConformation);

function PaymentConformation($http,$location) {
  var vm = this;
  var tx = $location.search().tx;
  var pdt = {};
  vm.cart = [];

  $http.get("/api/pdt/" + tx).then(function (response) {
    vm.output = response.data.split("\n");

    for (property in response.data.split("\n")){
      var key = response.data.split("\n")[property].split("=")[0];
      var value = response.data.split("\n")[property].split("=")[1];

      pdt[key] = value;
    }

    for (i= 1; i < pdt["num_cart_items"];i++){
      vm.cart[i-1]=pdt["item_name"+i];
    }

  });

  vm.payment_status = vm.output[0];



}
