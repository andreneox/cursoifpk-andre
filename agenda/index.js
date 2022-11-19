//setup express
const express = require ('express')
const app = express()

require('dotenv').config()


const helpers = require('./helpers/handlebars')

//setup express-handlebars
//instalar npm install express-handlebars
const { engine } = require('express-handlebars')
app.engine('handlebars', engine({
    helpers: helpers
}))
app.set('view engine', 'handlebars')


//setup routes
const routes = require('./routes/routes')


//setup para linkar a0s rotas
app.use(express.urlencoded({extended:true}))

app.use('/', routes)





app.listen(process.env.porta, ()=>{
    console.log('Server rodando na porta')
})