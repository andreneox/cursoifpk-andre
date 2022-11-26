const express = require('express')
const app = express()
const routes = require('./routes/routes')
const AuthController = require ('./controllers/AuthController')
const middlewareValidaJwt = require ('./validarJwt')
const apiroutes = require ('./routes/apiRoutes')
const { engine } = require('express-handlebars')
require('dotenv').config()

app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))

app.set('view engine','handlebars')

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use('/', routes)

app.use('/api', middlewareValidaJwt, apiroutes)

app.post('/login', AuthController.login)

app.listen(process.env.PORT, ()=>{
    console.log('Servidor Ok!')
})