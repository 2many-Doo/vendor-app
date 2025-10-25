import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  team?: mongoose.Types.ObjectId; // Team reference
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);



export const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
