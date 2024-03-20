import mongoose from "mongoose";
export const dbConnection = async () => {
  try {
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;

    const uri = `mongodb+srv://${username}:${password}@snap-share.rbozysx.mongodb.net/snap-share?retryWrites=true&w=majority&appName=snap-share`;
    await mongoose.connect(uri);
    console.log("connected to database");
  } catch (error) {
    throw new Error("Failed to connect to database");
  }
};
