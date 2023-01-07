const express = require('express')
const ProdutoController = require("../controllers/ProdutoController");
const CategoriaController = require("../controllers/CategoriaController");
const routes = express.Router()

//Rotas de Produtos
routes.get('/produtos', ProdutoController.index)
routes.post('/produto/store', ProdutoController.store)
routes.put('/produto/update/:id', ProdutoController.update)
routes.delete('/produto/delete/:id', ProdutoController.delete)

//Rotas de Categorias
routes.get('/categorias', CategoriaController.index)
routes.post('/categoria/store', CategoriaController.store)
routes.put('/categoria/update/:id', CategoriaController.update)
routes.delete('/categoria/delete/:id', CategoriaController.delete)


module.exports = routes