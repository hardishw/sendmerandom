var mongoose = require("mongoose");
var Item = mongoose.model("Item");

module.exports.itemsGetAll = function(req, res) {
  Item
    .find()
    .exec(function(err, items) {
      var response = {
        status: 200,
        message: items
      };

      if (err) {
        console.log("Error retrieving item");
        response.status = 500;
        response.message = err;
      } else if (!items) {
        console.log("Couldnt find any items");
        response.status = 404;
        response.message = {
          "message": "No Items Found!"
        };
      }

      res
        .status(response.status)
        .json(response.message);
    });
}

module.exports.itemsGetOne = function(req, res) {
  var itemId = req.params.itemId;

  Item
    .findById(itemId)
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

module.exports.itemsAddOne = function(req, res) {
  console.log("POST new item");

  Item
    .create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      images: _splitArray(req.body.images),
      stock: req.body.stock
    }, function(err, item) {
      if (err){
        console.log(req.body);
        console.log(err);

        res
          .status(400)
          .json(err);
      } else {
        console.log("created " + item);

        res
          .status(201)
          .json(item);
      }
    });
}
