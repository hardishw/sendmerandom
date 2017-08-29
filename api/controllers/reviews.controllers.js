var mongoose = require("mongoose");
var Item = mongoose.model("Item");

module.exports.reviewsGetAll = function(req, res) {
  var itemId = req.params.itemId;

  Item
    .findById(itemId)
    .select("reviews")
    .exec(function(err, reviews) {
      var response = {
        status: 200,
        message: reviews
      };

      if (err) {
        console.log("Error retrieving item");
        response.status = 500;
        response.message = err;
      } else if (!reviews) {
        console.log("Couldnt find any reviews");
        response.status = 404;
        response.message = {
          "message": "No reviews Found!"
        };
      }

      res
        .status(response.status)
        .json(response.message);
    });
}

module.exports.reviewsGetOne = function(req, res) {
  var itemId = req.params.itemId;
  var reviewId = req.params.reviewId;

  Item
    .findById(itemId)
    .select("reviews")
    .exec(function(err, item) {
      var response = {
        status: 200,
        message: item
      };

      if (err) {
        console.log("Error retrieving item");
        response.status = 500;
        response.message = err;
      } else if (!item) {
        console.log("Couldnt find item " + itemId);
        response.status = 404;
        response.message = {
          "message": "Item ID not found " + itemId
        };
      } else {
        response.message = item.reviews.id(reviewId);

        if (!response.message) {
          response.status = 404;
          response.message = {
            "message": "Review ID not found " + reviewId
          };
        }
      }

      res
        .status(response.status)
        .json(response.message);
    });

}

var _splitArray = function(input){
  var output

  if (input && input.length > 0){
    output = input.split(";");
  } else {
    output = [];
  }

  return output;
}

module.exports.reviewsAddOne = function(req, res) {
  console.log("POST new review");

  var itemId = req.params.itemId;

  Item
    .findById(itemId)
    .select("reviews")
    .exec(function(err, item) {
      var response = {
        status: 200,
        message: item
      };

      if (err) {
        console.log("Error retrieving item");
        response.status = 500;
        response.message = err;
      } else if (!item) {
        console.log("Couldnt find item " + itemId);
        response.status = 404;
        response.message = {
          "message": "Item ID not found " + itemId
        };
      }

      if (item){
        item.reviews.push({
          userFirstName : req.body.userFirstName,
          rating: parseInt(req.body.rating, 10),
          review: req.body.review
        });

        item.save(function(err, updatedItem) {
          if (err) {
            console.log(err);

            res
              .status(500)
              .json(err);
          } else {
            res
              .status(200)
              .json(updatedItem.reviews[updatedItem.reviews.length - 1]);
          }
        });
      } else {
        res
          .status(response.status)
          .json(response.message);
      }

    });
}
