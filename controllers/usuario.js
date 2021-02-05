const UsuarioServico = require('../services/usuario');

const criar = async (req, res) => {
  try {

    if (!req.body) {
      return res.status(400).send({
        message: 'Sem dados para criar registro, verifique o body da requisicao',
      });
    }

    const novoUsuario = UsuarioServico.criar(req.body);
    res.send(novoUsuario);
    
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
  }
};

const buscarTodos = async (req, res) => {
  console.log("teste");
  try {
    const todosOsUsuarios = await UsuarioServico.buscarTodos();
    res.send(todosOsUsuarios);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
  }
};

const buscarPorId = async (req, res) => {
  const id = req.params.id;

  try {

    const usuario = await UsuarioServico.buscarPorId(id);
    if(usuario){
      res.send(usuario);
    }
    else{
      res.status(404).send({ message: 'Usuário não encontrada com  id: ' + id });
    }
    
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o Usuário id: ' + id });
  }
};

const editar = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualizacao vazio',
    });
  }

  const id = req.params.id;

  try {

    await UsuarioServico.editar(id, req.body);

  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar a Usuário id: ' + id });
  }
};

const remover = async (req, res) => {
  const id = req.params.id;

  try {
    await UsuarioServico.remover(id);
    res.send({ message: 'Usuário excluido com sucesso' });
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar o Usuário id: ' + id });
  }
};

module.exports = { criar, buscarTodos, buscarPorId, editar, remover };