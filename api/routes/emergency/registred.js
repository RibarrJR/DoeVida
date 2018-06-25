const express = require('express');
const router = express.Router();
const emergency = require('../../controllers/emergencyActions');

router.post('/', emergency.emergencySave);

module.exports = router;