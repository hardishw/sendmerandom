angular.module("sendmerandom").controller("PaymentConformation",PaymentConformation);

function PaymentConformation($http,$location) {
  var vm = this;
  var tx = $location.search().tx;
  vm.pdt = {};
  vm.cart = [];

  $http.get("/api/pdt/" + tx).then(function (response) {
    vm.output = response.data.split("\n");

    for (property in response.data.split("\n")){
      var key = response.data.split("\n")[property].split("=")[0];
      var value = response.data.split("\n")[property].split("=")[1];

      vm.pdt[key] = value;
    }

    for (i= 1; i < parseInt(vm.pdt["num_cart_items"]) + 1;i++){
      var item = {};
      item["name"]=vm.pdt["item_name"+i];
      item["qty"]=vm.pdt["quantity"+i]
      vm.cart[i-1]=item;
    }

    vm.payment_status = vm.output[0];
    vm.pdt.address_street=vm.pdt.address_street.replace(/\+/g," ");
    vm.pdt.address_city=vm.pdt.address_city.replace(/\+/g," ");
    vm.pdt.address_state=vm.pdt.address_state.replace(/\+/g," ");
    vm.pdt.address_zip=vm.pdt.address_zip.replace(/\+/g," ");

  });

}
