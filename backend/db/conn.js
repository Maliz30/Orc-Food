const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://marianenacarvalho:UkDtOY613EzLJqZr@cluster0.crzu0rz.mongodb.net/?retryWrites=true&w=majority"
        )

        console.log("Conectado ao banco!")
    } catch (error) {
        console.log(error)
    }
}

module.exports = main;