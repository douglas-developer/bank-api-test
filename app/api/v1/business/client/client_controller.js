const BaseResourceController = require('../../base/base_resource_controller');
const Model = require("./client_model");
const ClientService = require('./client_service');
const ClientErrorHandler = require("./client_error_handler");


class ClientsController extends BaseResourceController {
    constructor() {
        super(Model, new ClientErrorHandler());
        this.service = new ClientService();
    }

    async createAccount(req, res, next) {
        try {
            let response = await this.service.createAccount(req.body);
            res.json(response);
        } catch (error) {
            next(this.handleError(error));
        }
    }
}

module.exports = ClientsController;
