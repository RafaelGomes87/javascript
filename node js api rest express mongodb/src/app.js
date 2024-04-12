import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error",(erro) =>{
    console.error("erro de conexão", erro);
 
});
 conexao.once("open",() =>{
    console.log("Conexao com o banco feita com sucesso");
 });

const app = express();
app.use(express.json());



app.get("/",(req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livro[index]);
});

app.post("/livros", (req, res) => {
    livro.push(req.body);
    res.status(201).send("livros cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livro[index].titulo = req.body.titulo;
    res.status(200).json(livro);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livro.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
})




export default app;
