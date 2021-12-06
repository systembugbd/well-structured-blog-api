const errorHandler = (req, res, next) => {
  throw new Error('');
};

class ErrorHandler extends Error {
  constructor(error, req, res, next) {
    this.message = error.message;
    this.statusCode = error.statusCode;
  }
}

module.exports = {
  ErrorHandler,
  errorHandler,
};
