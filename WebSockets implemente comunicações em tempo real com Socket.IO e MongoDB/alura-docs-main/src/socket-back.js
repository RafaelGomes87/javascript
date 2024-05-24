import io from "./servidor.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou! ID:", socket.id);
  
    socket.on("editor-texto", (texto) => {
      console.log("oi");
    });
  
  });
