import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  clerkId: String,
  email: String,
  username: String,
  name: String,
  profilePic: String,
});

export const userModel =
  mongoose.models.users || mongoose.model("users", userSchema);
