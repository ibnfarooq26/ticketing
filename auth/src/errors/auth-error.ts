import { CustomError } from "./custom-error";

export class AuthError extends CustomError {
  statusCode = 400;
  constructor() {
    super("not Authorized");
    Object.setPrototypeOf(this, AuthError.prototype);
  }
  serializeErrors = () => {
    return [{ message: "not Authorized" }];
  };
}
