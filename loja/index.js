const express = require('express')
const routes = require("./routes/routes");
const app = express()
const middlewareValidarJWT = require('./validarJwt')
const AuthController = require("./controllers/AuthController");
require('dotenv').config()

app.use(express.json())

// app.use(cors())

app.post('/api/login', AuthController.login)

app.use('/api', middlewareValidarJWT, routes)

app.listen(process.env.PORT, ()=>{
    console.log('Servidor Rodando!')
})