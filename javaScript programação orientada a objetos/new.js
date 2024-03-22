// function User(nome, email){
//     this.nome = nome
//     this.email = email

//     this.exibirinfor = function(){
//         return `${this.nome}, ${this.email}`
//     }
// }

// const novoUser = new User('Rafael', 'ra@fa.com')
// console.log(novoUser.exibirinfor())
// function Admin(role){
//     User.call(this, 'Rafael','ra@fa.com')
//     this.role = role || 'estudante'

// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirinfor())
// console.log(novoUser.role)

const user ={
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },   
    exibirInfos: function(nome){
        return this.nome
    }
}

const novoUser = Object.create(user) 
novoUser.init('Rafael','ra@fa.com')
console.log(novoUser.exibirInfos())



// console.log(novoUser.exibirInfos('Rafael'))
// console.log(user.isPrototypeOf(novoUser))






