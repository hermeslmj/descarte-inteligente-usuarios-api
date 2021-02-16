const usuarioService = require("./usuario");

async function login(email, password) {
    const usuario = await usuarioService.buscarPorEmail(email);
    if(usuario) {
        if(usuario.password == password) {
            return true;
        }
    }
    return false;
}

module.exports = { login }