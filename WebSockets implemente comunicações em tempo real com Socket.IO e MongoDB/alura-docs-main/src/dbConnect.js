import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://alura:123@cluster0.2sjsawi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

 let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("aluara-websockets");
    const documentos = db.collection("documentos");

    console.log("Conectado ao banco de dados com sucesso!");

} catch (erro) {
    console.log(erro);
}

export { documentosColecao };