const { Categoria, Produto} = require('../models')
class CategoriaController {
    static async index(req,res)
    {
        try{
            const categorias = await Categoria.findAll({include: 'produtos'})
            res.status(200).json({
                data: categorias
            })
        } catch (e) {
            res.status(500).json({
                erro:true,
                message: e.message
            })
        }
    }
    static async store (req,res)
    {
        try {
            const categoria = await Categoria.create(req.body)
            res.status(200).json({
                data: categoria
            })
        } catch (e) {
            res.status(500).json({
                erro:true,
                message: e.message
            })
        }
    }
    static async update(req,res)
    {
        try{
            const categoria = await Categoria.findByPk(req.params.id)
            await categoria.update({
                descricao: req.body.descricao
            })
            res.status(200).json({
                data:categoria
            })
        }catch (e) {
            res.status(500).json({
                erro:true,
                message: e.message
            })
        }
    }
    static async delete(req,res)
    {
        try{
            const categoria = await Categoria.findByPk(req.params.id)
            await categoria.destroy()
            res.status(200).json({
                data: "Categoria excluída com sucesso!"
            })
        }catch (e) {
            res.status(500).json({
                erro:true,
                message: e.message
            })
        }
    }
}

module.exports = CategoriaController