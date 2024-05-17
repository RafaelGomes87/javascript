const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');
// const pessoa = require('../database/models/pessoa.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }

  async pegaTodosAsPessoas(req, res){
    try {
      const listaTodasAsPessoas = await pessoaServices.pegaPessoasEscopoTodos();
      return res.status(200).json(listaTodasAsPessoas);
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }

}

module.exports = PessoaController;
