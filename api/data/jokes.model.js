var mongoose = require('mongoose');

var jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: true
  },
  punchline: {
    type: String,
    required: true
  }
});

mongoose.model("Joke",jokeSchema);
