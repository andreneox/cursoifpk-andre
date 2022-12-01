const express = require ("express")
const routes = express.Router()
const ApiController =require ('../controllers/ApiController')

//todas as pessoas
routes.get('/', ApiController.index )

//criar uma pessoa
routes.post('/store', ApiController.store )

//mostrar uma pessoa por um id
routes.get('/show/:id', ApiController.show )

//editar uma pessoa
routes.put('/update/:id', ApiController.update )

//deletar uma pessoa
routes.delete('/delete/:id', ApiController.delete )


module.exports = routes