var express = require("express");
var router = express.Router();

// Controllers
var itemsCtrl = require("../controllers/items.controllers");
var reviewCtrl = require("../controllers/reviews.controllers");
var ipnCtrl = require("../controllers/ipn.controller");
var pdtCtrl = require("../controllers/pdt.controller");
var jokesCtrl = require("../controllers/jokes.controller");

// Jokes routes
router
  .route("/jokes")
  .get(jokesCtrl.jokesGetAll)
  .post(jokesCtrl.jokesAddOne);

// Paypal ipn routes
router
  .route("/ipn")
  .post(ipnCtrl.verify);

router
  .route("/pdt/:tx")
  .get(pdtCtrl.pdt);

// Items routes
router
  .route("/items")
  .get(itemsCtrl.itemsGetAll)
  .post(itemsCtrl.itemsAddOne);

router
  .route("/items/:itemId")
  .get(itemsCtrl.itemsGetOne);

router
  .route("/items/:itemId/stock")
  .get(itemsCtrl.itemsGetStock);

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
