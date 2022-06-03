import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { passToExpressErrorHandler } from "../../utils";

const claimPostSchema = Joi.object({
  subject: Joi.string().required(),
  claim: Joi.string().required(),
  object: Joi.string().required(),
  qualifier: Joi.string(),
  aspect: Joi.string(),
  howKnown: Joi.string().required(),
  source: Joi.string().required(),
  effectiveDate: Joi.date().required(),
  confidence: Joi.number().min(1).max(5),
  reviewRating: Joi.number().min(1).max(5),
});

export const claimPostValidator = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    await claimPostSchema.validateAsync(req.body);
    next();
  } catch (err: any) {
    passToExpressErrorHandler(err, next);
  }
};