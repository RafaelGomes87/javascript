import livro from "../modules/Livro.js";

class LivroController {

    static async listarLivros (req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    }

    static async cadastrarLvro (req, res){
    try{
     const novoLivro = await livro.create(req.body);
    res.status(201).json({message: "criado com sucesso",livro:novoLivro});
    } catch (erro){
    res.status(500).json({message:`${erro.message} - falha ao cadastroa livro `});
    }
    
 }


};

export default LivroController;