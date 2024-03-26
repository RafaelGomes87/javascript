"use strict"
import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo) 
        }

    aprovaEstudade(estudante, curso){
        return `Estudante ${estudante} passou no curso ${curso}.`       
    }    
}

const novoDocente = new Docente('Rafael','r@fa.com', '2021-01-01')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudade('Rafael','JS'))
