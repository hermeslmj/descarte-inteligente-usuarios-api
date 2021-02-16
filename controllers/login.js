const loginService = require("../services/login");

const login = async (req, res) => {
    try {
        
      if (!req.body) {
        return res.status(400).send({
          message: 'Sem dados para criar registro, verifique o body da requisicao',
        });
      }

      const isSucesso = await loginService.login(req.body.email, req.body.password);
      res.send(isSucesso);
      
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
    }
};

module.exports = { login };