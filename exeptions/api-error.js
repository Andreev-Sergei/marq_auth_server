class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.errors = errors
        this.status = status
    }


    static UnauthtorizedError() {
        return new ApiError(402, 'Ошибка авторизации')
    }

    static BadRequest(message, errors) {
        return new ApiError(400, message, errors)
    }

    static NoPermissions(message, errors) {
        return new ApiError(401, message, errors)
    }
}

module.exports = ApiError