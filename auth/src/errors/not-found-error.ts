import { CustomError } from "./custom-error";

export class NotFoundEError extends CustomError{
    statusCode= 404;
    constructor(){
        super("Route not found")
    }
    serializeErrors=()=> { 
         return [{
            message: "router Not found"
        }]
    }
}