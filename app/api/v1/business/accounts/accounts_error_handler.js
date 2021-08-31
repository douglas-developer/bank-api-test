const BaseErrorHandler = require('../../base/base_error_handler');


class AccountsErrorHandler extends BaseErrorHandler {
    errorResponse(data) {
        let response = { key: data.message, status: data.status };

        return super.errorResponse(response);
    }
}

module.exports = AccountsErrorHandler;
