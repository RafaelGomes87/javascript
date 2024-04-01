 export default class User {
    #nome   
    #email 
    #nascimento 
    #role 
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudando'// isso é um construto 
        this.#ativo = ativo
    }

    #montaObjUser(){
        return ({
          nome: this.#nome,
          email: this.#email,
          nascimento: this.#nascimento,  
          role: this.#role,
          ativo: this.#ativo,
        })
    }

    exibirInfos(){
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo} `
    }

 }






















//  const novoUser = new User('Rafael', 'ra@fa.com','2021-01-01')
//  console.log(novoUser),
//  console.log(novoUser.exibirInfos())
//  console.log(User.prototype.isPrototypeOf(novoUser)) // true