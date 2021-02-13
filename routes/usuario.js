const express = require('express');
const usuarioController = require('../controllers/usuario');
const router = express.Router();

/**
 * @typedef usuario
 * @property {string} nome.required
 * @property {string} email.required
 * @property {string} password.required
 * @property {string} cidade.required
 * @property {string} estado.required
 * @property {string} idade.required
 */


/**
 * Crir um usuario novo na base de dados
 * @route POST /api/usuario
 * @group Usuários
 * @param {usuario.model} usuario.body.required
 * @returns {object} 200 - Um registro de usuário
 * @returns {Error}  default - Unexpected error
 */

router.post('/', usuarioController.criar);

/**
 * Get para retornar todos os usuários da base
 * @route GET /api/usuario
 * @group Usuários
 * @returns {object} 200 - Um array com todos os usuários da base, sem paginação
 * @returns {Error}  default - Unexpected error
 */
router.get('/', usuarioController.buscarTodos);

/**
 * Get para retornar todos os usuários da base
 * @route GET /api/usuario/{id}
 * @group Usuários
 * @param {string} id.path.required
 * @returns {object} 200 - Um array com o usuários correspondente ao ID pesquisado
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', usuarioController.buscarPorId);


/**
 * Retorna um usuario atualizado pelo ID dele
 * @route PUT /api/usuario/{id}
 * @group Usuários
 * @param {string} id.path.required
 * @param {usuario.model} usuario.body.required
 * @returns {object} 200 - Um registro de usuário
 * @returns {Error}  default - Unexpected error
 */

router.put('/:id', usuarioController.editar);

/**
 * Get para retornar todos os usuários da base
 * @route DELETE /api/usuario/{id}
 * @group Usuários
 * @param {string} id.path.required
 * @returns {object} 200 - Um objeto com o usuário apagado
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', usuarioController.remover);

module.exports = router;