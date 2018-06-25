var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('./emergency/deleteEmergency.html', {});
});

module.exports = router;