var express = require('express');
var router = express.Router();

/* GET error page. */
router.get('/', function(req, res, next) {
    res.render('error.html', {
        error: req.body.error
    });
});

module.exports = router;