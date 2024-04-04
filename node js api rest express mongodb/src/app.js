import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: "O senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "o Hobbit"
    }
]

app.get("/",(req, res) =>{
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});



export default app;
