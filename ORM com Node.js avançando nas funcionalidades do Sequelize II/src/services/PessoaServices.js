const dataSource = require('../database/models');
const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
    this.matriculaServices =  new Services('Matriculas');
  }

  async pegaMatriculasAtivasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }
  async pegaTodasAsMatriculasEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getTodasAsMatriculas();
    return listaMatriculas;
  }  

  async pegaPessoasEscopoTodos () {
    const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
    return listaPessoas;
  }

  async canceçaPessoaEMatriculas (estudanteId) {
    return dataSource.sequelize.transaction(async(transacao) => { 
      await super.atualizaRegistro({ ativo: false }, { id: estudanteId }, transacao);
      await this.matriculaServices.atualizaRegistro({status: 'cancelado'}, { estudadente_id: estudanteId }, transacao);
    });
  }
}

module.exports = PessoaServices;
