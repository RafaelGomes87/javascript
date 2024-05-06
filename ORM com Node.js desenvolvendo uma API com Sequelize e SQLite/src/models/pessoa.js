'use strict';
const {
  Model,
  ForeignKeyConstraintError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
     Pessoa.hasMany(models.Curso,{
      ForeignKey: 'docente_id'
    });
    Pessoa.hasMany(models.Matricula,{
      ForeignKey: 'estudante_id',
      scope:{ status: 'matriculado' },
      as: ' aulasMatriculas'
    });
  }
}
  Pessoa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas'
  });
  return Pessoa;
};