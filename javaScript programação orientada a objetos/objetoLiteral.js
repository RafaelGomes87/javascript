const user = {
    nome: "Rafael",
    email: "r@fa.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfor : function(){
        console.log(this.nome, this.email)
    }
} 

const admin = {
    name: "Marina",
    email: "m@m.com",
    role: "admin",
    criarCurso(){
    console.log('curso criado!')
    }
} 


Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfor()


