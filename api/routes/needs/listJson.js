const express = require('express');
const router = express.Router();
const needs = require('../../controllers/needsActions');

router.get('/', needs.needsListJson);

module.exports = router;