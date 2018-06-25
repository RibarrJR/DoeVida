const express = require('express');
const router = express.Router();
const bank = require('../../controllers/bankActions');

router.put('/', bank.bankUpdate);
router.post('/', bank.bankUpdate);

module.exports = router;