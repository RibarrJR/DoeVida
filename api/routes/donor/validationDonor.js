var express = require('express');
var router = express.Router();
const donor = require('../../controllers/donorActions');

router.post('/', donor.donorLogin);


module.exports = router;