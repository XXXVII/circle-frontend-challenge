class ErrorHandler extends Error {
    constructor(message: string, public statusCode: number) {
        super(message)
        this.statusCode = statusCode

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export default ErrorHandler
