const express = require('express');
const router = express.Router();
const donor = require('../../controllers/donorActions');

router.post('/', donor.donorDelete);
router.delete('/', donor.donorDelete);

module.exports = router;