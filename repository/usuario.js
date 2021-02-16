const UsuariosModel = require('../models/usuario');

async function criar(dados) 
{
    const novoUsuario = new UsuariosModel(dados);
    await novoUsuario.save();
    return novoUsuario;
}

async function editar(id, dados) {
    const usuarioAtualizado = await UsuariosModel.findByIdAndUpdate({ _id: id }, dados, { new: true });
    if(usuarioAtualizado) {
        return usuarioAtualizado;
    }
    return false;
}

async function buscarPorId(id) {
    const usuario = await UsuariosModel.findById(id);
    if(usuario) {
        return usuario
    }
    return false;
}

async function buscarPorEmail(email) {
    const usuario = await UsuariosModel.find({ email: { $eq: email } } );
    if(usuario) {
        return usuario
    }
    return false;
}

async function buscarTodos() {
    const usuarios = await UsuariosModel.find();
    return usuarios;
}

async function remover(id) {
    await UsuariosModel.deleteOne({ _id: id });
}

module.exports = { criar, editar, buscarPorId, buscarPorEmail, buscarTodos, remover }