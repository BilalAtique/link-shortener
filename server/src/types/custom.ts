import { Types } from "mongoose";
import { Request } from "express";

export interface ExtendedRequest extends Request {
  user?: {
    _id: Types.ObjectId;
    fullName: string;
    email: string;
    password: string;
  };
}
