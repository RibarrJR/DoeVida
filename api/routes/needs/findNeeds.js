var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('./needs/findNeeds.html', {});
});

module.exports = router;