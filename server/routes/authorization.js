const express = require('express');
const { authorizationController } = require('../controller/authorization.js');

const router = express.Router();

router.get('/', authorizationController);

module.exports = router;