import { CustomError } from "./custom-error"

export class DatabaseConnectionError extends CustomError{
    statusCode=500
    reason= "DB connenection error!!!"
    constructor (){
        super("Database Connection Error")

    }
    serializeErrors=()=>{
        return [{
message: this.reason
        }]
    }
} 