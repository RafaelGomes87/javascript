import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo) 
    }
}

const novoAdmin = new Admin('Rafael', 'r@fa.com', '2021-01-01')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())