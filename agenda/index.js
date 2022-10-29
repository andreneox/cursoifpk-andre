const express = require ('express')
const app = express()

const routes = require('./routes/routes')



app.use(express.urlencoded({extended:true}))

app.use('/', routes)


const port = 3000


app.listen(port, ()=>{
    console.log('Server rodando na porta: '+port)
})