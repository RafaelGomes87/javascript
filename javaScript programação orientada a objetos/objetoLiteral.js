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