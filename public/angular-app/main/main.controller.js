angular.module("sendmerandom").controller("MainController",MainController);

function MainController(JokesService) {
  var vm = this;

  JokesService.getJoke().then(function(response) {
    vm.joke = response;
  });
}
