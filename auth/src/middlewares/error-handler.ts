import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";


/* Error returns to the front end is necessary to be mainatained in a same format
and thus Here error returns as format
@ returns {
    errors: [{message, field?}]
}
*/

export const errorHandler=(err: Error, req: Request, res:Response, next:NextFunction)=>{
    if(err instanceof CustomError){
        return res.status(err.statusCode).send({
            errors: err.serializeErrors()
        })
    }

    res.status(400).send({
      errors:[{
                message: "something went wrong"
            }]
    })

}