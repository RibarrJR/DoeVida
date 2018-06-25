const express = require('express');
const router = express.Router();
const needs = require('../../controllers/needsActions');

router.post('/', needs.needJson);

module.exports = router;