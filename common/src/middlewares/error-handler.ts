import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    const formattedErrors = err.errors.map((error) => {
      return {
        message: error.msg,
        field: error.param,
      };
    });
    return res.status(400).send({ errors: formattedErrors });
  }

  return res.status(500).send({ message: "Something went wrong" });
};
