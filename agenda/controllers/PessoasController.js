
const path = require('path')
let pessoas = []
//let usuarios = [
   // {username: 'andre', password:'123'},
  //  {username: 'mary', password:'321'},
//]




class PessoasController {

    static index(req,res)
    {
        
        res.render('index')
    }

   static lista (req, res)
    {
        
        res.render('lista', {
            usuarios:usuarios
        })
    }

    static login (req,res)
        {
            let auth = false
            let user = req.body
            if(user.login == usuario.username)
            {
                auth=true
            }
            res.render('index', {
                auth:auth
            })
        }

    static store(req, res)
    {
        pessoas.push(req.body.nome)
       // let pessoa = req.body
       // pessoa.idade = 2022 - pessoa.nascimento
       // pessoas.push(pessoa)
        
        console.log(pessoas)
        

        res.render('index',  {
            pessoas:pessoas
        })
    }

    static cadastro(req,res)
    {
        
        res.render('cadastro')
    }

}







module.exports = PessoasController