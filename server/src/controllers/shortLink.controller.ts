import { Response } from "express";
import { ExtendedRequest } from "../types/custom";
import { asyncHandler } from "../utils/asyncHandler";
import { ShortLink } from "../models/shortLink.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

const createShortLink = asyncHandler(
  async (req: ExtendedRequest, res: Response) => {
    const { originalLink, shortLink, creationDate, expiryDate } = req.body;
    if ([originalLink, shortLink].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "Original and short link are required");
    }
    const createdLink = await ShortLink.create({
      originalLink,
      shortLink,
      creationDate,
      expiryDate,
      userID: req.user?._id,
    });

    return res
      .status(201)
      .json(new ApiResponse(200, createdLink, "Link registered Successfully"));
  }
);

export { createShortLink };
