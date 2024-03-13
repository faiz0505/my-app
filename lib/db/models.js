import mongoose, { Mongoose } from "mongoose";
const userSchema = new mongoose.Schema({
  clerkId: String,
  email: String,
  username: String,
  name: String,
  profilePic: String,
});

export const userModel =
  mongoose.models.users || mongoose.model("users", userSchema);

const postScheme = new mongoose.Schema({
  caption: String,
  imageUrl: String,
  imageKey: String,
  createAt: String,
  updatedAt: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});
export const postModel =
  mongoose.models.posts || mongoose.model("posts", postScheme);
