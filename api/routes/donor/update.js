var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('./donor/update.html', {
        id: req.query.id,
        name: req.query.name,
        password: req.query.password,
        email: req.query.email,
        blood: req.query.blood
    });
});

module.exports = router;