const { Pessoas, Telefone } = require('../models')


class PessoasController {
    static async index(req,res)
    {
        const pessoas = await Pessoas.findAll({include: 'telefones'})
        res.render('index', {
            pessoas:pessoas
        })
    }

    static async cadastro(req,res)
    {
        try {
            const pessoa = await Pessoas.create({
                nome: req.body.nome,
                email: req.body.email,
                data_nascimento: req.body.data_nascimento
            })
            if(pessoa)
            {
                await Telefone.create ({
                    numero: req.body.numero,
                    pessoaId:pessoa.id
                })
            }

            res.redirect('/')
        } catch (error) {
            console.log(error.message)
            res.redirect('/')
        }
    }

    static async show (req, res)
    {
        const pessoa = await Pessoas.findByPk(req.params.id, {raw: true})
        res.redirect('/')
        // const pessoa02 = await Pessoas.findOne({
        //     where: {
        //         nome: req.body.codigo
        //     }
        // })

        // const pessoa03 = await Pessoas.findAll({
        //     where: {
        //         nome: 'Jojo'
        //     }
        // })


        console.log(pessoa)
        
    }

    static async update (req, res )
    {
        try {
            const pessoa = await Pessoas.findByPk(req.params.id)
            pessoa.nome = "Novo1"
            pessoa.save()
            console.log(pessoa)
            res.redirect('/')

        } catch (error) {
            console.log(error.message)
        }
    }


    static async deletar(req,res)
    {
        try {
            const telefones = await Telefone.findAll({
                where:{
                    pessoaId: req.params.id
                }
            })
            telefones.forEach(telefone => {
                telefone.destroy()
            });
            const pessoa = await Pessoas.findByPk(req.params.id)
            pessoa.destroy()
            res.redirect('/')
        } catch (error) {
            console.log(error.message)
        }
    }

}

module.exports = PessoasController