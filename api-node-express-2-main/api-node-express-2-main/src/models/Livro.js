import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String,
      required: [true,"O título do livro é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'autores', 
      required: [true,"O(a) autor(a) é obrigatório"],
      autopopulate: true // propriedade adicionada
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"],
      enum: {
        values: ["Casa do código","Alura"],
        message:"A editora {VALUE} não é um valor permitido."
      }
    },
    numeroPaginas: {
      type: Number,
      validate: {
        validator:(valor) => {
        return valor >= 10 && valor <= 5000;
        },
        message: "O numero de páginas deve estar entre 10 e 5000.Valor fornecido: {VALUE}"
      }
    }
  }
);

const livros= mongoose.model('livros', livroSchema);
livroSchema.plugin(autopopulate);

export default livros;