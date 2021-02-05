const UsuariosRepositorio = require('../repository/usuario');

async function criar(dados) 
{
    try
    {
        const novoUsuario = await UsuariosRepositorio.criar(dados);
        if(novoUsuario) 
            return novoUsuario;
        return false;
    }
    catch(error)
    {
        console.log(error);   
    }
}

async function editar(id, dados) {
    try 
    {
        const usuarioAtualizado = await UsuariosRepositorio.editar(id, dados);

        if(usuarioAtualizado)
            return usuarioAtualizado
        return false;
    }
    catch(error) 
    {
        console.log(error);
    }
}

async function buscarPorId(id) {
    return await UsuariosRepositorio.buscarPorId(id);
}

async function buscarTodos() {
    return await UsuariosRepositorio.buscarTodos();
}

async function remover(id) {
    return await UsuariosRepositorio.remover(id);
}

module.exports = { criar, editar, buscarPorId, buscarTodos, remover }