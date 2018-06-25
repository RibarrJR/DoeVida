var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('./bank/findBank.html', {});
});

module.exports = router;