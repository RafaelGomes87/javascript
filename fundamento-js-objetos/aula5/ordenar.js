const clientes = require("./clientes.json");

function ordenar(lista, propriedade){
    // A função recebe dois parâmetros: 'lista' é a array que será ordenada, 
    // e 'propriedade' é a propriedade dos objetos dentro da array pela qual você deseja ordenar.
    // Utiliza o método 'sort' da array para ordenar os elementos com base na comparação
    
    const resultado = lista.sort((a,b)=>{   
        if (a[propriedade] < b[propriedade]){
            return -1;
        }
        // A função de comparação recebe dois elementos 'a' e 'b' da array
        // Verifica se o valor da propriedade de 'a' é menor que o de 'b'
        if (a[propriedade] > b [propriedade]){
            return 1;
        }
        // Retorna -1 para indicar que 'a' deve vir antes de 'b'
        // Verifica se o valor da propriedade de 'a' é maior que o de 'b'
            return 0;
    });

    return resultado;
         // Retorna a array ordenada
}

const ordenadoNome = ordenar(clientes,"nome");

console.log(ordenadoNome);