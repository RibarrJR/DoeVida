const express = require('express');
const router = express.Router();
const bank = require('../../controllers/bankActions');

router.get('/', bank.bankPanel);

module.exports = router;