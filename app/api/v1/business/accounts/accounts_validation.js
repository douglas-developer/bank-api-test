const Joi = require("joi");

module.exports = {
  deposit: {
    params: {
      idConta: Joi.number().required(),
    },
    body: {
      valor: Joi.number().min(0).required()
    }
  },
  balance: {
    params: {
      idConta: Joi.number().required(),
    }
  },
  withdraw: {
    params: {
      idConta: Joi.number().required(),
    },
    body: {
      valor: Joi.number().min(0).required()
    }
  },
  blockAccount: {
    params: {
      idConta: Joi.number().required()
    },
  }
};
