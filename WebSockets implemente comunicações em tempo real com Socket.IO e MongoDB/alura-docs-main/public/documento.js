const socket = io();

 const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup",() => {
    socket.emit("editor-texto", textoEditor.value )
    
});
