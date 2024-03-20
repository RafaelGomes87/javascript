const user = {
    nome: "Rafael",
    email: "r@fa.com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfor : function(){
        console.log(this.nome, this.email)
    }
} 

// user.exibirInfor()
// const exibir = user.exibirInfor
// exibir()

const exibir = function() {
    console.log(this.nome, this.email)
}

const exibirNome = exibir.bind(user)
exibirNome()
exibir()
