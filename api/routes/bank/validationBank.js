var express = require('express');
var router = express.Router();
const bank = require('../../controllers/bankActions');

router.post('/', bank.bankLogin);


module.exports = router;