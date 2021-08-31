const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const { MongooseAutoIncrementID } = require('mongoose-auto-increment-reworked');
const Model = new mongoose.Schema({
    idTransacao: {
        type: mongoose.Schema.Types.ObjectId
    },
    idConta: {
        type: Number
    },
    valor: {
        type: Number,
    },
    dataTransacao: {
        type: Date
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
});

Model.plugin(MongooseAutoIncrementID.plugin, { field: "idTransacao", modelName: "Transactions" });
Model.plugin(mongoosePaginate);

const Transactions = mongoose.model('Transactions', Model);
module.exports = Transactions;

