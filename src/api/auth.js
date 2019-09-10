const express = require('express');
const controller = require('../controller/index')
const router = express.Router();
const passport = require("passport");


router.route('/login').post((req, res) => controller.auth.login(req, res));
router.route('/changePassword').post(passport.authenticate("bearer", { session: false }) ,(req, res) => controller.auth.login(req, res));

module.exports = router;