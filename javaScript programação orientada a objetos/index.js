import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User('Rafael', 'r@fa.com', '2021-01-01')
// console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01')
console.log(novoAdmin.nome)
novoAdmin.nome = 'André'
console.log(novoAdmin.nome)








// novoUser.#nome = 'Teste'  //não conseguimos mais fazer modificações em nenhuma propriedade de user por fora da classe.
// novoUser.#email = 't@t.com'
// // console.log(novoUser.#nome)

