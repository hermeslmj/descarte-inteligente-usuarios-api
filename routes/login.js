const express = require('express');
const loginController = require('../controllers/login');
const router = express.Router();

/**
 * @typedef login
 * @property {string} email.required
 * @property {string} password.required
 */

/**
 * Verifica se o login do usuário está correto
 * @route POST /api/login
 * @group Login
 * @param {login.model} email.body.required
 * @returns {object} 200 - Um registro de usuário
 * @returns {Error}  default - Unexpected error
 */

router.post('/', loginController.login);


module.exports = router;