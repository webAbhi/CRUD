const express = require('express');
const router = express.Router();
const authController = require('../Controllers/auth.controller');

router.post ('/login', authController.userLogin);
router.post('/create', authController.createUser);

module.exports = router;