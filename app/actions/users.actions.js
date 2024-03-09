"use server";

import { dbConnection } from "@/lib/db/connection";
import { ErrorHandler } from "../utils/errorHandler";
import { userModel } from "@/lib/db/models";

export const createUser = async (user) => {
  try {
    await dbConnection();
    const newUser = await userModel.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    ErrorHandler(error);
  }
};
