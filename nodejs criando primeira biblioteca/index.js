import fs from 'fs';
import chalk from 'chalk';

function tratErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretótrio'));
}

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro,texto) => {
        if (erro) {
            tratErro(erro);
        }
        console.log(chalk.green(texto));
    } )
}

pegaArquivo('./arquivos/');