var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('./bank/deleteBank.html', {});
});

module.exports = router;