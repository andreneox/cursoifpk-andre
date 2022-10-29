const express = require ('express')
const PessoasController = require('../controllers/PessoasController')
const routes = express.Router()

routes.get('/', PessoasController.index)

routes.post('/', PessoasController.store)

routes.post('/login', PessoasController.login)

routes.get('/sobre', PessoasController.sobre)

routes.post('/pessoas', PessoasController.store)


module.exports = routes