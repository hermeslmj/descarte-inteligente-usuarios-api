const express = require('express');
const usuarioController = require('../controllers/usuario');
const router = express.Router();

router.post('/', usuarioController.criar);
router.get('/', usuarioController.buscarTodos);
router.get('/:id', usuarioController.buscarPorId);
router.put('/:id', usuarioController.editar);
router.delete('/:id', usuarioController.remover);

module.exports = router;