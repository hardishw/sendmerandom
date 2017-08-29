var mongoose = require("mongoose");

var addressSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  firstLine: {
    type: String,
    required: true
  },
  secondLine: {
    type: String
  },
  thirdLine: {
    type: String
  },
  towncity: {
    type: String,
    required: true
  },
  postcode: {
    type: String,
    required: true
  }
});

var birthdaySchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
    min: 1,
    max: 31
  },
  month: {
    type: Number,
    required: true,
    min: 1,
    max: 12
  }
});

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  title: String,
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  age: Number,
  birthday: birthdaySchema,
  address: [addressSchema],
  mobileNo: String
});

mongoose.model("User",userSchema);
