var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('./needs/deleteNeeds.html', {});
});

module.exports = router;