const nome = "Alura";
// ["A", "l", "u", "r", "a"]

let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++){
    nomeMaiusculas += nome[i].toLocaleUpperCase()
}

console.log (nomeMaiusculas);