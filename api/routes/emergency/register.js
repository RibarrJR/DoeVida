var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('./emergency/register.html', {
      id: req.query.id
  });
});

module.exports = router;