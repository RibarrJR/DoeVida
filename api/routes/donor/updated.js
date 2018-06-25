const express = require('express');
const router = express.Router();
const donor = require('../../controllers/donorActions');

router.put('/', donor.donorUpdate);
router.post('/', donor.donorUpdate);

module.exports = router;