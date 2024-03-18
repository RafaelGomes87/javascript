import chalk from "chalk";

function extraiLinks (arrLinks) {
   return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function chacaStatus (listaURLs){
    const arrStatus = await Promise
    .all(
        listaURLs.map(async (url) => {
            try {
                const response = await fetch(url)
                return response.status;

            } catch (erro) {
                return manejaErros(erro)

            }
        })

    )
    return arrStatus;
}

function manejaErros (erro) {
    if (erro.cause.code === 'ENOTFOUND'){
        return 'link não encontrado';
    }else{
        return 'ocorreu um erro';
    }
}

export default async function listaValidada (listaDeLink){
    const links = extraiLinks(listaDeLink);
    const status = await chacaStatus(links);
    
    return listaDeLink.map((objeto, indice) => ({
      ...objeto,
      status: status[indice] 
    }))
}




