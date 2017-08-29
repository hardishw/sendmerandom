var express = require("express");
var router = express.Router();

// Controllers
var itemsCtrl = require("../controllers/items.controllers");
var reviewCtrl = require("../controllers/reviews.controllers");

// Items routes
router
  .route("/items")
  .get(itemsCtrl.itemsGetAll)
  .post(itemsCtrl.itemsAddOne);

router
  .route("/items/:itemId")
  .get(itemsCtrl.itemsGetOne);

// User Address routes

// Item Review routes
router
  .route("/items/:itemId/reviews/")
  .get(reviewCtrl.reviewsGetAll)
  .post(reviewCtrl.reviewsAddOne);

router
  .route("/items/:itemId/reviews/:reviewId")
  .get(reviewCtrl.reviewsGetOne);

// Auth routes


module.exports = router;
