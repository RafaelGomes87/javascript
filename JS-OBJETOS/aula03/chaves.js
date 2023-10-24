const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["216464654","6846546846"],
};

cliente.enderecos =[
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

const chaveDoObjeto = Object.keys(cliente);

console.log (chaveDoObjeto);


if (!chaveDoObjeto.includes("enderecos")){
    console.error("Erro. É necessario ter um endereco cadastrado ")

}


