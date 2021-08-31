const Helper = require('./helper');

class AccountsHelper extends Helper {
    constructor() {
        super('Clients');
    }

}

module.exports = new AccountsHelper();
