import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretótrio')); // esta funcição é para localizar o erro no codigo
}

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises
     .readFile(caminhoDoArquivo, encoding)
     .then((texto) => console.log(chalk.green(texto)))
     .catch(trataErro)
}

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro,texto) => {
//         if (erro) {
//             tratErro(erro);
//         }
//         console.log(chalk.green(texto));
//     } )
// }

pegaArquivo('./arquivos/');