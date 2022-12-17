const express = require('express')
const ApiController = require('../controllers/ApiController')
const routes  = express.Router()

routes.get('/', ApiController.index) // visualizar todas as pessoas

routes.post('/cadastro', ApiController.store) // cadastrar uma pessoa

routes.get('/show/:id', ApiController.show)// exibir uma pessoa

routes.put('/editar/:id', ApiController.update)// atualizar uma pessoa

routes.delete('/apagar/:id', ApiController.destroy)// apagar uma pessoa


module.exports = routes