import mongoose, { Mongoose } from "mongoose";
const userSchema = new mongoose.Schema({
  clerkId: String,
  email: String,
  username: String,
  name: String,
  profilePic: String,
  bio: String,
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  followings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  createdAt: String,
  updatedAt: String,
});

export const userModel =
  mongoose.models.users || mongoose.model("users", userSchema);

const postScheme = new mongoose.Schema({
  caption: String,
  imageUrl: String,
  imageKey: String,
  createAt: String,
  updatedAt: String,
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      comment: String,
      date: String,
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});
export const postModel =
  mongoose.models.posts || mongoose.model("posts", postScheme);
