const path = require('path')
let pessoas = ['john', 'mary']


class PessoasController {
    static index(req,res)
    {
        res.sendFile(path.resolve('index.html'))
    }

    static store(req, res)
    {
        
    }
}







module.exports = PessoasController