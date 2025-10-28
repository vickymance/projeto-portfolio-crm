const express = require('express');
const router = express.Router();
const { registerCorretor, loginCorretor, registerCliente, loginCliente } = require('../controllers/authController');

router.post('/corretor/register', registerCorretor);
router.post('/corretor/login', loginCorretor);
router.post('/cliente/register', registerCliente);
router.post('/cliente/login', loginCliente);

module.exports = router;
