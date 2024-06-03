import { inserirLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) =>{
    documentos.forEach((documento) => {
        inserirLinkDocumento(documento.nome);
    });
});

function emitirAdicionarDocumento(nome) {
    socket.emit("adicionar_documento", nome);
}

socket.on("adicionar_documento",(nome) => {
    inserirLinkDocumento(nome);
} );

socket.on("documento_existe", (nome) => {
   alert(`O documento ${nome} já existe!`)
});

socket.on("excluir_documento_sucesso", (nome) => {
    removeEventListener(nome);
})

export { emitirAdicionarDocumento };
