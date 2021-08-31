const express = require('express');
const app = express();
const routers = {};
const config = require('./config');
const setup = require('./setup');

routers.v1 = express.Router();

config.configure(app, express, routers);

setup.setupDatabase();
/* generate inject routes */
routers.v1.use("/clients", require('../api/v1/business/client/client_routes'));
routers.v1.use("/accounts", require('../api/v1/business/accounts/accounts_routes'));

/* health check */
routers.v1.route('/health').get((req, res) => res.status(200).send());



module.exports = app;
