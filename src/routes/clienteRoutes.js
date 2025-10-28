const express = require('express');
const router = express.Router();
const { listarClientes, registrarFollowUp } = require('../controllers/clienteController');
const { authorizeCorretor } = require('../middleware/authMiddleware');

router.get('/', authorizeCorretor, listarClientes);
router.post('/:id/followup', authorizeCorretor, registrarFollowUp);

module.exports = router;
