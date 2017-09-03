var mongoose = require("mongoose");
var Joke = mongoose.model("Joke");

var index = 0;

module.exports.jokesGetAll = function(req, res) {
  Joke
    .find()
    .exec(function(err, jokes) {
      var response = {
        status: 200,
        message: {"jokes" : jokes, "index" : index}
      };

      if (err) {
        console.log("Error retrieving jokes");
        response.status = 500;
        response.message = err;
      } else if (!jokes) {
        console.log("Couldnt find any jokes");
        response.status = 404;
        response.message = {
          "message": "No jokes Found!"
        };
      }

      res
        .status(response.status)
        .json(response.message);
    });
    index++;
}

module.exports.jokesAddOne = function(req, res) {
  Joke
    .create({
      joke: req.body.joke,
      punchline: req.body.punchline,
    }, function(err, joke) {
      if (err){
        console.log(req.body);
        console.log(err);

        res
          .status(400)
          .json(err);
      } else {
        console.log("created " + joke);

        res
          .status(201)
          .json(joke);
      }
    });
}
