var mongoose = require("mongoose");
var Item = mongoose.model("Item");
var request = require('request');

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

module.exports.itemsGetStock = function(req, res) {
  var itemId = req.params.itemId;
  var endpoint;

  if (process.env.ENV == "dev") {
    endpoint = 'sandbox.';
  } else {
    endpoint = "";
  }

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
      } else {
        var buttonId = "E89RB4V56KRLG";

        var options = {
          form: {
            HOSTEDBUTTONID: buttonId,
            USER: process.env.API_USER,
            METHOD: "BMGetInventory",
            PWD: process.env.API_PWD,
            SIGNATURE: process.env.API_SIGNATURE,
            VERSION: 95.0
          }
        };

        request.post('https://api-3t.' + endpoint + 'paypal.com/nvp', options, function(e, r, body) {
          console.log("message Received");
          var message = {};

          for (property in body.split("&")){
            var key = body.split("&")[property].split("=")[0];
            var value = body.split("&")[property].split("=")[1];

            message[key] = value;
          }
          console.log("loop done");
          response.message = parseInt(message.ITEMQTY);
           console.log("sending");

          res
            .status(response.status)
            .json(response.message);
        });

      }

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
      stock: req.body.stock,
      buttonId: req.body.buttonId
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
