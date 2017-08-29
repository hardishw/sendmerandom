angular.module("sendmerandom", ["ngRoute"]).config(config);

function config($routeProvider) {

  $routeProvider
    .when("/",{
      templateUrl: "angular-app/main/main.html"
    })
    .when("/products",{
      templateUrl: "angular-app/item-list/items.html",
      controller: ItemsController,
      controllerAs: "vm"
    })
    .when("/product/:itemId",{
      templateUrl: "angular-app/item-display/item.html",
      controller: ItemController,
      controllerAs: "vm"
    });
}
