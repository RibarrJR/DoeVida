var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
res.render('./bank/update.html', { 
    id: req.query.id,
    name: req.query.name,
    password: req.query.password,
    email: req.query.email,
    description: req.query.description,
    address: req.query.address,
    telephone: req.query.telephone
    });
});

module.exports = router;