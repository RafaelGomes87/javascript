const {Router} = require('express');
const PessoaController = require('../controllers/PessoaControlles.js');

const pessoaController = new PessoaController();

const router = Router();

router.get ('/pessoas',(req,res) => pessoaController.pegaTodos(req,res));

module.exports = router;