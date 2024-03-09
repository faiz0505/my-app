"use server";

import { dbConnection } from "@/lib/db/connection";
import { ErrorHandler } from "../utils/errorHandler";
import { userModel } from "@/lib/db/models";

export const createUser = async (user) => {
  try {
    await dbConnection();
    const newUser = await userModel.create({
      clerkId: user.clerkId,
      name: user.name,
      username: user.username,
      email: user.email,
      profilePic: user.profilePic,
    });
    return newUser;
  } catch (error) {
    ErrorHandler(error);
  }
};
