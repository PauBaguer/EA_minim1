import mongoose from "mongoose";
import { User } from "./user";
const Schema = mongoose.Schema;
const model = mongoose.model;

export interface FAQ {
  userQ: User;
  question: String;
  userA: User;
  answer: String;
  postingDate: Date;
}

const faqSchema = new Schema<FAQ>({
  userQ: { type: Schema.Types.ObjectId, ref: "User", required: true },
  question: { type: String, required: true },
  userA: { type: Schema.Types.ObjectId, ref: "User" },
  answer: String,
  postingDate: { type: Date, required: true },
});

export const FAQModel = model<FAQ>("FAQ", faqSchema);
