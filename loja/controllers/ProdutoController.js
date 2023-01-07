const { Produto } = require('../models')
class ProdutoController {
    static async index(req,res)
    {
        try{
            const produtos = await Produto.findAll({include: 'categoria'})
            res.status(200).json({
                data: produtos
            })
        } catch (e) {
            res.status(500).json({
                erro: true,
                message: e.message
            })
        }
    }
    static async store(req,res)
    {
        try{
            const { descricao, quantidade,categoriaId } = req.body
            const produto = await Produto.create({
                descricao: descricao,
                quantidade: quantidade,
                categoriaId: categoriaId ? categoriaId : null
            })

            res.status(200).json({
                data: produto
            })
        }catch (e) {
            res.status(500).json({
                erro: true,
                message: e.message
            })
        }
    }
    static async update(req,res)
    {
        const { descricao, quantidade,categoriaId } = req.body

        const produto = await Produto.findByPk(req.params.id)

        await produto.update({
            descricao: descricao,
            quantidade: quantidade,
            categoriaId: categoriaId ? categoriaId : null
        })
        res.status(200).json({
            data: produto
        })
    }
    static async delete(req,res)
    {
        try{
            const produto = await Produto.findByPk(req.params.id)
            produto.destroy()
            res.status(200).json({
                data: "Produto excluído com sucesso!"
            })
        }catch (e) {
            res.status(500).json({
                erro:true,
                message: e.message
            })
        }
    }
}

module.exports = ProdutoController