const express = require('express');
const router = express.Router();
const operationsController = require('../Controllers/operations.controller');


router.post ('/update', operationsController.updateUser);
router.post('/delete', operationsController.deleteUser);
router.get('/allUser', operationsController.getAllUser);

module.exports = router;