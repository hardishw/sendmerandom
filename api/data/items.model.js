var mongoose = require("mongoose");

var reviewSchema = new mongoose.Schema({
  userFirstName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  review: String
});

var itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    required: true,
    type: Number,
    min: 0
  },
  buttonId: {
    type: String,
    required: true
  },
  description: String,
  images: [String],
  reviews: [reviewSchema],
  avgRating: {
    type: Number,
    min: 1,
    max: 5
  }
});

mongoose.model("Item", itemSchema);
