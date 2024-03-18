function extraiLinks (arrLinks) {
   return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function chacaStatus (listaURLs){
    const arrStatus = await Promise
    .all(
        listaURLs.map(async (url) => {
            const response = await fetch(url)
            return response.status;
        })

    )
    return arrStatus;
}

export default async function listaValidada (listaDeLink){
    const links = extraiLinks(listaDeLink);
    const status = await chacaStatus(links);
   return status;
}

// [gatinho salsicha](http://gatinhosalsicha.com.br/)



