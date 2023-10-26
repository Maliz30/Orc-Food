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
    },
    getAll: async (req, res) => {
        try {
            const search = req.query.search || "";
            const items = await ItemModel.find({ nome: {$regex:search, $options: "i"}});
            res.json(items);
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            // id => URL === GET, passar id pela URL
            const id = req.params.id
            const item = await ItemModel.findById(id);

            if (!item){
                res.status(404).json({msg: "Item não encontrado."});
                return;
            }

            res.json(item);
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const item = await ItemModel.findById(id);
            if(!item){
                res.status(404).json({msg: "Item não encontrado."})
                return;
            }

            const deletedItem = await ItemModel.findByIdAndDelete(id);
            res.status(200).json({ deletedItem, msg: "Item deletado com sucesso."})
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {

        try {
            const id = req.params.id;

            const item = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                categoria: req.body.categoria,
            }

            const updatedItem = await ItemModel.findByIdAndUpdate(id, item);
            res.status(200).json({updatedItem, msg: "Item atualizado com sucesso."})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = itemController