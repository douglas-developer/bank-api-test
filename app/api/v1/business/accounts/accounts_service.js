const Model = require("./accounts_model");
const BaseService = require('../../base/base_service');
const TransactionModel = require('../transactions/transactions_model');
const AccountModel = require('../accounts/accounts_model');
const moment = require('moment');
class AccountsService extends BaseService {
    constructor() {
        super();
        this.model = Model;
    }

    async deposit({ idConta, valor }) {
        let account = await AccountModel.findOne({ idConta });
        if (!account) throw ({ message: "ACCOUNT_NOT_FOUND", status: 404 });
        if (!account.flagAtivo) throw ({ message: "ACCOUNT_BLOCKED" });
        console.log(account.saldo, valor);
        await TransactionModel.create({ Id: idConta, valor, dataTransacao: Date.now(), idConta: account.idConta });
        account.saldo = Number((account.saldo).toFixed(2)) + Number((valor).toFixed(2));
        await account.save();
    }

    async balance({ idConta }) {
        let account = await AccountModel.findOne({ idConta });
        if (!account) throw ({ message: "ACCOUNT_NOT_FOUND", status: 404 });
        return { saldo: account.saldo };
    }

    async withdraw({ idConta, valor }) {
        let account = await AccountModel.findOne({ idConta });
        if (!account) throw ({ message: "ACCOUNT_NOT_FOUND", status: 404 });
        if (!account.flagAtivo) throw ({ message: "ACCOUNT_BLOCKED" });
        if (Number((valor).toFixed(2)) > Number((account.saldo).toFixed(2))) throw ({ message: "INSUFFICIENT_FUNDS" });
        if (account.limitSaqueDiario === 0) throw ({ message: "WITHDRAWAL_LIMIT_EXCEEDED" });
        await TransactionModel.create({ Id: idConta, valor: -Math.abs(valor), dataTransacao: Date.now(), idConta: account.idConta });
        account.saldo = Number((account.saldo).toFixed(2)) - Number((valor).toFixed(2));
        account.limitSaqueDiario = account.limitSaqueDiario - 1;
        await account.save();
    }

    async blockAccount({ idConta }) {
        let account = await AccountModel.findOne({ idConta });
        if (!account) throw ({ message: "ACCOUNT_NOT_FOUND", status: 404 });
        account.flagAtivo = false;
        await account.save();
    }


    async index({ idConta, startFrom, endAt }) {
        let account = await AccountModel.findOne({ idConta });
        if (!account) throw ({ message: "ACCOUNT_NOT_FOUND", status: 404 });
        const filter = {
            idConta: idConta
        };
        if (startFrom && endAt) {
            filter.dataTransacao = this._queryDate(startFrom, endAt);
        }
        const transactions = TransactionModel.find(filter);
        return transactions;
    }

    _queryDate(startFrom, endAt, gte = true, lte = true) {
        let query = {};
        if (startFrom) {
            query[`$gt${gte ? 'e' : ''}`] = moment(startFrom).toDate();
        }
        if (endAt) {
            query[`$lt${lte ? 'e' : ''}`] = moment(endAt).toDate();
        }
        return query;
    }
}

module.exports = AccountsService;
