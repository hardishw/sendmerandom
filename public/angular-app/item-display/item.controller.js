angular.module("sendmerandom").controller("ItemController", ItemController);

function ItemController($route, $routeParams, itemDataFactory, JokesService) {
  var vm = this;
  var itemId = $routeParams.itemId

  vm.button = "Add To Cart";
  vm.show = true;
  vm.punchline = JokesService.getPunchline();
  vm.tab = 1;

  itemDataFactory.stock(itemId).then(function(response) {
      vm.stock = response.data;
      vm.show = false;
  });

  itemDataFactory.itemDisplay(itemId).then(function(response) {
    vm.item = response.data;
    vm.buttonId = vm.item.buttonId;
  });

  vm.setTab = function(newTab){
      vm.tab = newTab;
  };

  vm.isSet = function(tabNum){
      return vm.tab == tabNum;
  };
}
