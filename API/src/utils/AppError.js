class AppError {
    status;
    message;

    constructor(message, status = 400) {
        this.message = message;
        this.status = status;
    }
}