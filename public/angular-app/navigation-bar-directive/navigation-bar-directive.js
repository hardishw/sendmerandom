angular.module("sendmerandom").directive('mhNavigation',mhNavigation);

function mhNavigation() {
  return {
    templateUrl: "angular-app/navigation-bar-directive/navigation-bar-directive.html"
  };
}
