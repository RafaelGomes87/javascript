import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(nome) {
    return usuariosColecao.findOne({ nome });
}

function cadastrarUsuario({ nome, senha }){
    return usuariosColecao.insertOne({ nome, senha })
}

export { cadastrarUsuario, encontrarUsuario };