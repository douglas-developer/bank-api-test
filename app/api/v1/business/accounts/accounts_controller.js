const BaseResourceController = require('../../base/base_resource_controller');
const Model = require("./accounts_model");
const AccountsService = require('./accounts_service');
const AccountserrorHandler = require('./accounts_error_handler');


class AccountsController extends BaseResourceController {
    constructor() {
        super(Model, new AccountserrorHandler());
        this.service = new AccountsService();
    }

    async deposit(req, res, next) {
        try {
            let response = await this.service.deposit({ ...req.body, idConta: req.params.idConta });
            res.json(response);
        } catch (error) {
            next(this.handleError(error));
        }
    }

    async balance(req, res, next) {
        try {
            let response = await this.service.balance({ idConta: req.params.idConta });
            res.json(response);
        } catch (error) {
            next(this.handleError(error));
        }
    }

    async withdraw(req, res, next) {
        try {
            let response = await this.service.withdraw({ ...req.body, idConta: req.params.idConta });
            res.json(response);
        } catch (error) {
            next(this.handleError(error));
        }
    }

    async blockAccount(req, res, next) {
        try {
            let response = await this.service.blockAccount({ idConta: req.params.idConta });
            res.json(response);
        } catch (error) {
            next(this.handleError(error));
        }
    }

    async index(req, res, next) {
        try {
            let response = await this.service.index({
                idConta: req.params.idConta,
                startFrom: req.query.startFrom,
                endAt: req.query.endAt
            });
            res.json(response);
        } catch (error) {
            next(this.handleError(error));
        }
    }
}

module.exports = AccountsController;
