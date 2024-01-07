import mongoose, { Model, Schema, Types } from "mongoose";

interface IShortLink {
  originalLink: string;
  shortLink: string;
  creationDate: Date;
  expiryDate?: Date | null;
  visits: number;
  userID: Types.ObjectId;
}

type ShortLinkModel = Model<IShortLink>;

const shortLinkSchema = new Schema<IShortLink, ShortLinkModel>({
  originalLink: {
    type: String,
    required: true,
    index: true,
  },
  shortLink: {
    type: String,
    required: true,
    unique: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  expiryDate: {
    type: Date,
    default: null,
  },
  visits: {
    type: Number,
    default: 0,
  },
userID :{
    type: "ObjectId",
    required: true,
    ref: "User"
}
});

export const ShortLink = mongoose.model<IShortLink, ShortLinkModel>("ShortLink", shortLinkSchema)