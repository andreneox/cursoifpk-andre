
const path = require('path')
let pessoas = []




class PessoasController {
    static index(req,res)
    {
        res.sendFile(path.resolve('index.html'))
    }

    static store(req, res)
    {
        let pessoa = req.body
        pessoa.idade = 2022 - pessoa.nascimento
        pessoas.push(pessoa)
        
        console.log(pessoas)
        

        res.redirect('/')
    }
}







module.exports = PessoasController