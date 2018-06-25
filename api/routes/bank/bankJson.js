const express = require('express');
const router = express.Router();
const bank = require('../../controllers/bankActions');

router.post('/', bank.bankJson);

module.exports = router;