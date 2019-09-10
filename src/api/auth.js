const express = require('express');
const controller = require('../controller/index')
const router = express.Router();


router.route('/login').post((req, res) => controller.auth.login(req, res));

module.exports = router;