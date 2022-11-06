const express = require ('express')
const PessoasController = require('../controllers/PessoasController')
const routes = express.Router()

routes.get('/', PessoasController.index)


// rotas do cadastro
routes.get('/cadastro', PessoasController.cadastro)

routes.post('/cadastro', PessoasController.salvar)

// rotas da lista
routes.get('/lista', PessoasController.lista)




// rotas do cadastro
routes.get('/buscarcep', PessoasController.buscarCep)

routes.post('/buscarcep', PessoasController.buscarCep)







// DA ULTIMA AULA 
// routes.post('/', PessoasController.store)

// routes.post('/login', PessoasController.login)

// routes.get('/sobre', PessoasController.sobre)

// routes.post('/pessoas', PessoasController.store)


module.exports = routes