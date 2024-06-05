import jwt from "jsonwebtoken";
import { Socket } from "socket.io";


function autorizarUsuario(socket, next) {
const tokenJwt = socket.handshake.auth.token;

try{
   const payloadToken = jwt.verify(tokenJwt, process.env.SEGREDo_JWT);

   socket.emit("autorizacao_sucesso", payloadToken);
   
   next();
} catch (erro) {
   next(erro);
  }
    
}

export default autorizarUsuario;