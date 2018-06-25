const express = require('express');
const router = express.Router();
const emergency = require('../../controllers/emergencyActions');

router.get('/', emergency.emergencyListJson);

module.exports = router;