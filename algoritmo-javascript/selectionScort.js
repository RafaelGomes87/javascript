const livros = require('./lista-livros');

const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual)
    
    let livroAtual = livros[atual];
    console.log('posição atual',atual)
    console.log('livro ataual', livros[atual])
    let livrosMenorPreco = livros[menor];
    console.log('livro menor preço', livros[menor])

    livros[atual] = livrosMenorPreco
    livros[menor] = livroAtual

}
console.log (livros)