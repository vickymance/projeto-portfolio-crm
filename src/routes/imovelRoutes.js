const express = require('express');
const router = express.Router();
const { listarImoveis, cadastrarImovel } = require('../controllers/imovelController');
const { authorizeCorretor, authorizeClienteOuCorretor } = require('../middleware/authMiddleware');

router.get('/', authorizeClienteOuCorretor, listarImoveis);
router.post('/', authorizeCorretor, cadastrarImovel);

module.exports = router;
