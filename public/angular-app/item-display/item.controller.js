angular.module("sendmerandom").controller("ItemController", ItemController);

function ItemController($route, $routeParams, itemDataFactory) {
  var vm = this;
  var itemId = $routeParams.itemId
  var fivePound = "B5CCBH8THMCCW"
  var tenPound = "6P3WQSGSTLKPQ"

  vm.button = "Add To Cart";
  vm.show = true;

  console.log(itemId);

  itemDataFactory.stock(itemId).then(function(response) {
      vm.stock = response.data;
      vm.show = false;
  });

  itemDataFactory.itemDisplay(itemId).then(function(response) {
    vm.item = response.data;
  });

  vm.tab = 1;

  vm.class = "active";

  vm.setTab = function(newTab){
      vm.tab = newTab;
  };

  vm.isSet = function(tabNum){
      return vm.tab == tabNum;
  };


}
