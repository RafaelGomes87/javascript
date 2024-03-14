import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]; // os tres pontinho é para espalha o array
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados;
}



function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretótrio')); // esta funcição é para localizar o erro no codigo
}

// async/await

 async function pegaArquivo(caminhoDoArquivo){
    try {
        const encoding ='utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(extraiLinks(texto));
    } catch (erro){
        trataErro(erro);
    }
 }

// promises com then()

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//      .readFile(caminhoDoArquivo, encoding)
//      .then((texto) => console.log(chalk.green(texto)))
//      .catch(trataErro)
// }

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro,texto) => {
//         if (erro) {
//             tratErro(erro);
//         }
//         console.log(chalk.green(texto));
//     } )
// }

pegaArquivo('./arquivos/texto.md');


