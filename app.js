require("./api/data/dbconnection.js");
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

var routes = require("./api/routes");

// Set port to listen on
app.set("port", 3000);

// Middleware to log incoming requests
app.use(function(req, res, next){
  console.log(req.method, req.url);
  next();
});

// Static directories
app.use(express.static(path.join(__dirname, "public")));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
app.use("/api", routes);

// Listen for requests
var server = app.listen(app.get("port"), function() {
  var port = server.address().port;
  console.log("Listening on port " + port);
});
