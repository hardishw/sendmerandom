module.exports.itemsGetAll = function(req, res) {
  res
    .status(200)
    .json({name : "£5 box"});
}

module.exports.itemsGetOne = function(req, res) {
  var itemId = req.params.itemId;

  res
    .status(200)
    .json({name : "£5 box", id : itemId});
}
