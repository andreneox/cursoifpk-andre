const express = require('express')
const PessoasController = require('../controllers/PessoasController')
const routes = express.Router()

routes.get('/', PessoasController.index)

routes.post('/cadastrar', PessoasController.cadastro)

routes.get('/show/:id', PessoasController.show)

routes.get('/atualizar/:id',PessoasController.update)

routes.get('/deletar/:id',PessoasController.deletar)

module.exports = routes
