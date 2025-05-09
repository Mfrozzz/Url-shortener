import mongoose, { Schema, Document } from "mongoose";
import Url from "./Url";

const UrlSchema: Schema = new Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<Url>("Url", UrlSchema);