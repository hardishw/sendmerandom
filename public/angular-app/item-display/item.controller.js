angular.module("sendmerandom").controller("ItemController", ItemController);

function ItemController($route, $routeParams, itemDataFactory) {
  var vm = this;
  var itemId = $routeParams.itemId
  vm.button = "Buy Me";

  console.log(itemId);

  itemDataFactory.itemDisplay(itemId).then(function(response) {
    console.log(response);
    vm.item = response.data;
    if (vm.item.stock == 0) {
      vm.button = "Out of Stock";
    }
  });
}
