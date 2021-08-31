const Joi = require("joi");

module.exports = {
    createAccount: {
        body: {
            tipoConta: Joi.number().required(),
            nome: Joi.string().required(),
            cpf: Joi.number().min(11),
            dataNascimento: Joi.date().required(),
        }
    }
};
