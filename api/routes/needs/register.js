var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('./needs/register.html', {
        id: req.query.id
    });
});

module.exports = router;