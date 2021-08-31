const Model = require("./client_model");
const BaseService = require('../../base/base_service');
const AccountModel = require('../accounts/accounts_model');
const { isCpf } = require('iscpf');

class ClientService extends BaseService {
    constructor() {
        super();
        this.model = Model;
    }

    async createAccount({ tipoConta, nome, cpf, dataNascimento }) {
        if (!isCpf(cpf)) throw ({ message: "CPF_IS_INVALID" });

        let client = await this.model.findOne({ cpf });
        if (!client) {
            client = await this.model.create({ nome, cpf, dataNascimento });
        }

        const accountType = await AccountModel.findOne({ idPessoa: client.idPessoa, tipoConta });
        if (accountType) throw ({ message: "ACCOUNT_TYPE_ALREADY_EXISTS" });

        const account = await AccountModel.create({
            idPessoa: client.idPessoa,
            flagAtivo: true,
            tipoConta: tipoConta,
            dataCriacao: Date.now()
        });

        return { ...{ account: account }, client };
    }

}

module.exports = ClientService;
