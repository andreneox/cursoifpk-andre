const express = require('express')
const cors  = require('cors')
const app = express()
const routes = require('./routes/routes')
const apiroutes = require('./routes/apiRoutes')
const { engine } = require('express-handlebars')
const AuthController = require('./controllers/AuthController')
const middlewareValidaJwt = require('./validarJwt')
require('dotenv').config()

app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.use(cors())
app.set('view engine','handlebars')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', routes)

app.post('/login',AuthController.login)

app.use('/api',middlewareValidaJwt,apiroutes)

app.listen(process.env.PORT, ()=>{
    console.log('Servidor rodando na porta: '+process.env.PORT )
})
