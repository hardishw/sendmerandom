angular.module("sendmerandom").controller("ItemController", ItemController);

function ItemController($route, $routeParams, itemDataFactory) {
  var vm = this;
  var itemId = $routeParams.itemId
  var fivePound = "B5CCBH8THMCCW"
  var tenPound = "6P3WQSGSTLKPQ"

  vm.button = "Add To Cart";

  console.log(itemId);

  itemDataFactory.itemDisplay(itemId).then(function(response) {
    console.log(response);
    vm.item = response.data;
    if (vm.item.stock == 0) {
      vm.button = "Out of Stock";
    }
    if (vm.item.price == 10) {
      vm.pricecode = tenPound;
    } else if (vm.item.price == 5) {
      vm.pricecode = fivePound
    }
  });
}
