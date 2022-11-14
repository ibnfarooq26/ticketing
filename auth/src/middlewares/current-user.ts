import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
interface payloadUser {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: payloadUser;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(
      req.session?.jwt,
      process.env.JWT_KEY!
    ) as payloadUser;
    req.currentUser = payload;
  } catch (err) {}
  next();
};
