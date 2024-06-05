import {
  atualizaDocumento,
  encontrarDocumento,
  excluirDocumento,
} from "../db/documentosDb.js";
import { adicionarConexao, obterUsuariosDocumento } from "../utils/conexoesDocumentos.js";

function registrarEventosDocumento(socket, io) {
  socket.on("selecionar_documento", async ({nomeDocumento, nomeUsuario}, devolverTexto) => {
      
      const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
        socket.join(nomeDocumento);

        adicionarConexao({ nomeDocumento, nomeUsuario });

        const usuariosNoDocumento = obterUsuariosDocumento(nomeDocumento);

        console.log(usuariosNoDocumento);
        
        devolverTexto(documento.texto);
    }
  });

  socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
  });

  socket.on("excluir_documento", async (nome) => {
    const resultado = await excluirDocumento(nome);

    if (resultado.deletedCount) {
      io.emit("excluir_documento_sucesso", nome);
    }
  });
}

export default registrarEventosDocumento;