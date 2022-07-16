const express = require('express');
const router = express.Router();
const { login, register } = require('./users.controller')

/* GET users listing. */
router.post('/register', register);

router.post('/login', login);

module.exports = router;
