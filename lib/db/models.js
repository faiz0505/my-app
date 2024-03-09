import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  clerkId: String,
  name: String,
  username: String,
  email: String,
  profilePic: String,
});

export const userModel =
  mongoose.models.users || mongoose.model("users", userSchema);
