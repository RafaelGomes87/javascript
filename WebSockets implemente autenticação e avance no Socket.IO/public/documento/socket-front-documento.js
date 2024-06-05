import { obterCookie } from "../utils/cookies.js";
import { 
  alertarERedirecionar, 
  atualizaTextoEditor, 
  atualizarInterfaceUsuarios, 
  tratarAutorizacaoSucesso 
} from "./documento.js";

const socket = io("/usuarios", {
  auth: {
    token: obterCookie("tokenJwt")
  }
});

socket.on("autorizacao_sucesso", tratarAutorizacaoSucesso);

socket.on("connect_error", (erro) =>{
  alert(erro);
  window.location.href = "/login/index.html";
});


function selecionarDocumento(dadosEntrada) {
  socket.emit("selecionar_documento", dadosEntrada, (texto) => {
    atualizaTextoEditor(texto);
  });
}

socket.on("usuarios_no_documento", atualizarInterfaceUsuarios)

function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome) {
  socket.emit("excluir_documento", nome);
}

socket.on("excluir_documento_sucesso", (nome) => {
  alertarERedirecionar(nome);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
