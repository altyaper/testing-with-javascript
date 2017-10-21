var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = ["Jorge Chavez", "Pedro Duarte", "Crystal Castillo"];
  res.json(users);
});

module.exports = router;
