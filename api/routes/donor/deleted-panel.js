const express = require('express');
const router = express.Router();
const donor = require('../../controllers/donorActions');

router.post('/', donor.donorDeletePanel);

module.exports = router;