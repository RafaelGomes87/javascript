import { emititTextoEditor } from "./socket-front-documento.js";

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup",() => {
  emititTextoEditor(textoEditor.value);
});

function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}

export {atualizaTextoEditor} ;
