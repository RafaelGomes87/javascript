// let telefone = 12341234;
// console.log("O telefone é " + String(telefone)); 


// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings



// let telefone = 12341234;
// console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

// let usuarioConectado = false;
// console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
// usuarioConectado = true;
// console.log(String(usuarioConectado)); // agora teremos uma string “true”.


// // Vamos calcular a área de um retângulo
// let largura = "10";
// let altura = "5";
// console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação


// let largura = "10";
// let altura = "5";
// console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

// let meuNome = "leonardo";
// console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
// console.log( + meuNome); // a conversão também retornará NaN

// let usuarioConectado = false;
// console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
// usuarioConectado = true;
// console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

var respostaDeTudo = 42
let idade = 29
const pi = 3.14
console.log(respostaDeTudo, idade, pi)

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
