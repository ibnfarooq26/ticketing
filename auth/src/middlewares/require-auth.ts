import { NextFunction, Request, Response } from "express";
import { AuthError } from "../errors/auth-error";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("reqq");
  if (!req.currentUser) {
    throw new AuthError();
  }
  next();
};
