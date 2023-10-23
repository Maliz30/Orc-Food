const mongoose = require('mongoose');
const {Schema} = mongoose;

const itemSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    }
})

const Item = mongoose.model("Item", itemSchema);

module.exports = {
    Item,
    itemSchema
};