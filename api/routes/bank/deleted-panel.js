const express = require('express');
const router = express.Router();
const bank = require('../../controllers/bankActions');

router.post('/', bank.bankDeletePanel);

module.exports = router;