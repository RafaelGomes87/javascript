alert ('Boas vindas ao jogo do número secreto');

let numeroSecreto = 5;
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n. s. 
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');   
  
    if (chute == numeroSecreto ) {
        
        alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    // se chute for igural ao número secreto  
    } else {
        if (chute > numeroSecreto){
            alert(`O numero secreto é manor que ${chute}`);
            } else {
                alert (`O numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        
        tentativas++;
    }   
}



