const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const { MongooseAutoIncrementID } = require('mongoose-auto-increment-reworked');

const Model = new mongoose.Schema({
    idConta: {
        type: Number
    },
    idPessoa: {
        type: Number
    },
    saldo: {
        type: Number,
        default: 0
    },
    limitSaqueDiario: {
        type: Number,
        default: 10
    },
    flagAtivo: {
        type: Boolean
    },
    tipoConta: {
        type: Number
    },
    dataCriacao: {
        type: Date
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
});

Model.plugin(MongooseAutoIncrementID.plugin, { field: "idConta", modelName: "Accounts" });
Model.plugin(mongoosePaginate);

const Accounts = mongoose.model('Accounts', Model);
module.exports = Accounts;

