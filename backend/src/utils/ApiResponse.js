class ApiResponse {
  constructor(message, data, statusCode, success = "false") {
    ((this.data = data),
      (this.message = message),
      (this.statusCode = statusCode),
      (this.success = success));
  }
}

export { ApiResponse };
