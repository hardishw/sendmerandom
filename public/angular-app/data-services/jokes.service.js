angular.module("sendmerandom").service("JokesService",JokesService);

function JokesService($http) {
  var jokes = [];
  var index = 0;
  var joke;
  var punchline;

  var getJoke = function() {
   return $http.get("/api/jokes").then(function(response) {
    jokes = response.data.jokes

    index = response.data.index;
    index = index % jokes.length;

    punchline = jokes[index].punchline;
    joke = jokes[index].joke;

    return joke;
  });
  }

  var getPunchline =  function() {
    return punchline;
  }

  return {
    getJoke: getJoke,
    getPunchline: getPunchline
  }

}
