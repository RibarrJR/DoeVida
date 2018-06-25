var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('./donor/register.html', {});
});

module.exports = router;