const express = require('express');
const router = express.Router();
const donor = require('../../controllers/donorActions');

router.get('/', donor.donorListJson);

module.exports = router;