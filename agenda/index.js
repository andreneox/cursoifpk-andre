//setup express
const express = require ('express')
const app = express()

//setup express-handlebars
//instalar npm install express-handlebars
const { engine } = require('express-handlebars')
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')


//setup routes
const routes = require('./routes/routes')


//setup para linkar as rotas
app.use(express.urlencoded({extended:true}))

app.use('/', routes)


const port = 3000


app.listen(port, ()=>{
    console.log('Server rodando na porta: '+port)
})