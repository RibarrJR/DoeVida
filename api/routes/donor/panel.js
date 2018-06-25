var express = require('express');
var router = express.Router();
const donor = require('../../controllers/donorActions');

router.get('/', donor.donorPanel);

module.exports = router;