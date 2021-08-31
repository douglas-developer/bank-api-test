const BaseErrorHandler = require('../../base/base_error_handler');


class ClientErrorHandler extends BaseErrorHandler {
    errorResponse(data) {
        let response = { key: data.message, status: data.status };
        console.log(data);
        return super.errorResponse(response);
    }
}

module.exports = ClientErrorHandler;
