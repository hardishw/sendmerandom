angular.module("sendmerandom").controller("ItemsController",ItemsController);

function ItemsController(itemDataFactory) {
  var vm = this;

  itemDataFactory.itemList().then(function(response) {
    vm.items = response.data;
    console.log(vm.items);
  })
}
