import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo) 
    }

    nomeAdmin(){
        return `${this.nome}`
    }

    criarCurso(nomeDoCurso, vagas){
        return`Curso de ${nomeDoCurso} criando com ${vagas} vagas`
    }
}

// const novoAdmin = new Admin('Rafael', 'r@fa.com', '2021-01-01')
// console.log(novoAdmin.criarCurso('JS',20))