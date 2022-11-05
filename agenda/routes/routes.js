const express = require ('express')
const PessoasController = require('../controllers/PessoasController')
const routes = express.Router()

routes.get('/', PessoasController.index)

//routes.post('/', PessoasController.store)

//routes.post('/login', PessoasController.login)

//routes.get('/lista', PessoasController.lista)

//routes.post('/pessoas', PessoasController.store)

//routes.get('/cadastro', PessoasController.cadastro)

//routes.post('/cadastro', PessoasController.store)

module.exports = routes