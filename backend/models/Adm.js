const mongoose = require('mongoose')
const {Schema} = mongoose

const admSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Adm = mongoose.model("Adm", admSchema);

module.exports = {
    Adm,
    admSchema
}