function registrarEventosCadastro(socket, io) {
    socket.on("cadastrar_usario",(dados) => {
        console.log(dados);
    });
}

export default registrarEventosCadastro; 