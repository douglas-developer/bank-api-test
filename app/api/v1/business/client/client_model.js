const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const { MongooseAutoIncrementID } = require('mongoose-auto-increment-reworked');

const Model = new mongoose.Schema({
    idPessoa: {
        type: String
    },
    nome: {
        type: String
    },
    cpf: {
        type: Number,
    },
    dataNascimento: {
        type: Date
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
});
Model.plugin(MongooseAutoIncrementID.plugin, { field: "idPessoa", modelName: "Clients" });
Model.plugin(mongoosePaginate);

const Clients = mongoose.model('Clients', Model);
module.exports = Clients;

