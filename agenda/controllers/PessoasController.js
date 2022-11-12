// utilizando o path do express
// const path = require('path')

// utilizando o axios
const axios = require('axios')

let pessoas = []

let alerta = false


const { Pessoa } = require('../models')

// para teste
// {nome: 'andre', data_nascimento: '28/09/1985', telefone: '99999 9999', cep: '69000 000'}



class PessoasController {

        static async index (req,res)
        {
            const pessoas = await Pessoa.findAll({raw: true})
            console.log(pessoas)

            res.render('index', {
                pessoas:pessoas
            })
        } 

        static async create (req,res)
        {
            try {
                    const pessoa = await Pessoa.create({

                    nome: 'Jojo',
                    email: 'jojo@email.com',
                    data_nascimento: new Date ('1999-05-24')
                })
                
            } catch (error) {
                const pessoa = error
            }
    
            res.redirect ('/')
        }
    } 

module.exports = PessoasController


// class PessoasController {

//     static index(req,res)
//     {
//         if (pessoas.length > 0){
//             alerta =false
//         } else{
//             alerta =true
//         }
//         res.render('index', {
//             pessoas:pessoas,
//             alerta:alerta
//         })
//     }

//     // controllers do cadastro
//     static cadastro (req, res)
//     {
//         res.render ('cadastro')
//     }

//     static salvar (req, res)
//     {
//         let data = 
//         pessoas.push(req.body)
//         res.redirect('lista')
//     }

//     // controllers da lista
//     static lista (req, res)
//     {
//         if (pessoas.length > 0){
//             alerta =false
//         } else{
//             alerta =true
//         }
//         res.render('lista', {
//             pessoas:pessoas,
//             alerta:alerta
//         })
//     }

    
//  // controllers para buscarcep
//     static async buscarCep (req, res)
//     {

//         let cep = req.body.cep
//         let rota = process.env.api_base+''+cep+'/json/'
        
        
//         let endereco = await axios.get(rota)
//         .then(function (response) {
//            return response.data
//             console.log(response.data)
//         })
//         .catch(function (error) {
//             return error
//             console.log(error)
//         })

//         res.render('endereco', {
//             endereco:endereco
//         })
//     }










//     static sobre (req, res)
//     {
        
//         res.render('sobre', {
//             usuarios:usuarios
//         })
//     }

//     static login (req,res)
//         {
//             let auth = false
//             let user = req.body
//             if(user.login == usuario.username)
//             {
//                 auth=true
//             }
//             res.render('index', {
//                 auth:auth
//             })
//         }

//     static store(req, res)
//     {
//         pessoas.push(req.body.nome)
//        // let pessoa = req.body
//        // pessoa.idade = 2022 - pessoa.nascimento
//        // pessoas.push(pessoa)
        
//         console.log(pessoas)
        

//         res.render('index', {
//             pessoas:pessoas
//         })
//     }
// }







