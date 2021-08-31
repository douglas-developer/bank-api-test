const express = require("express");
const validate = require("express-validation");

const Controller = require('./accounts_controller');
const validation = require("./accounts_validation");

const Router = express.Router();
let controller = new Controller();

Router
    .route('/:idConta/deposit')
    .post(validate(validation.deposit), controller.deposit.bind(controller));

Router
    .route('/:idConta/balance')
    .get(validate(validation.balance), controller.balance.bind(controller));


Router
    .route('/:idConta/withdraw')
    .post(validate(validation.withdraw), controller.withdraw.bind(controller));

Router
    .route('/:idConta/block')
    .patch(validate(validation.blockAccount), controller.blockAccount.bind(controller));

Router
    .route('/:idConta/transactions')
    .get(controller.index.bind(controller));

module.exports = Router;
