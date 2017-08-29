var express = require("express");
var router = express.Router();

// Controllers
var itemsCtrl = require("../controllers/items.controllers");

// Items route
router
  .route("/items")
  .get(itemsCtrl.itemsGetAll);

router
  .route("/items/:itemId")
  .get(itemsCtrl.itemsGetOne);

module.exports = router;
