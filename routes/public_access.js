const express = require('express');
const router = express.Router();

const registerController= require('./auth_controller/register');

router.use('/register', registerController);

module.exports = router;