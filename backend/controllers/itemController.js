const { Item: ItemModel } = require("../models/Item");

const itemController = {
    create: async(req, res) => {
        try {
            const item = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                categoria: req.body.categoria,
            }

            const response = await ItemModel.create(item);

            res.status(201).json({response, msg:"Item adicionado com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = itemController