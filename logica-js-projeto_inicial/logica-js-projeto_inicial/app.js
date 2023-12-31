alert ('Boas vindas ao jogo do número secreto');

let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');


if (chute == numeroSecreto ) {
    console.log
    alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} `);
 
} else {
    alert(`Você erro, número escolhido no chute foi ${chute}`)
}