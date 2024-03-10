"use server";

import { dbConnection } from "@/lib/db/connection";
import { ErrorHandler } from "../utils/errorHandler";
import { userModel } from "@/lib/db/models";
import { revalidatePath } from "next/cache";
export const createUser = async (user) => {
  try {
    await dbConnection();
    const newUser = await userModel.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    ErrorHandler(error);
  }
};
export async function updateUser(clerkId, user) {
  try {
    await dbConnection();

    const updatedUser = await userModel.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteUser(clerkId) {
  try {
    await dbConnection();

    // Find user to delete
    const userToDelete = await userModel.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // // Unlink relationships
    // await Promise.all([
    //   // Update the 'events' collection to remove references to the user
    //   Event.updateMany(
    //     { _id: { $in: userToDelete.events } },
    //     { $pull: { organizer: userToDelete._id } }
    //   ),

    //   // Update the 'orders' collection to remove references to the user
    //   Order.updateMany(
    //     { _id: { $in: userToDelete.orders } },
    //     { $unset: { buyer: 1 } }
    //   ),
    // ]);

    // Delete user
    const deletedUser = await userModel.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}
