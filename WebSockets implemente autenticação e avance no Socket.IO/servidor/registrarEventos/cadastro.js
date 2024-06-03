import { Socket } from "socket.io";
import { cadastrarUsuario, encontrarUsuario } from "../db/usuariosDb.js";

function registrarEventosCadastro(socket, io) {
    socket.on("cadastrar_usario", async (dados) => {
        const usuario = await encontrarUsuario(dados.nome);   
        
       if (usario === null){
        const resultado = await cadastrarUsuario(dados);

        if (resultado.acknowledged) {
            socket.emit("cadastro_sucesso");
        } else {
            socket.emit("cadastro_erro");
        }  
       } else {
            Socket.emit("usuario_já_existente");
       }
        
    });
}

export default registrarEventosCadastro; 