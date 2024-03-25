 export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudando'// isso é um construto 
        this.ativo = ativo
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }

 }
//  const novoUser = new User('Rafael', 'ra@fa.com','2021-01-01')
//  console.log(novoUser),
//  console.log(novoUser.exibirInfos())
//  console.log(User.prototype.isPrototypeOf(novoUser)) // true