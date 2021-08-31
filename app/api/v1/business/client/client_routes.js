const express = require("express");
const validate = require("express-validation");

const Controller = require('./client_controller');
const validation = require("./client_validation");

const Router = express.Router();
let controller = new Controller();

Router
    .route('/account')
    .post(validate(validation.createAccount), controller.createAccount.bind(controller));


module.exports = Router;
