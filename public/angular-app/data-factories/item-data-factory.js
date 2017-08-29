angular.module("sendmerandom").factory('itemDataFactory',itemDataFactory);

function itemDataFactory($http) {
  return {
    itemList: itemList,
    itemDisplay: itemDisplay,
  }

  function itemList() {
    return $http.get("/api/items/").then(complete).catch(failed);
  }

  function itemDisplay(id) {
    return $http.get("/api/items/" + id).then(complete).catch(failed);
  }

  function complete(response) {
    return response;
  }

  function failed(error) {
    console.log(error.statusText);
  }
}
