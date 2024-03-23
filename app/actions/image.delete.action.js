"use server";
import { utapi } from "@/utils/server/uploadthing";

export const deleteImageFromUT = async (keys) => {
  try {
    const res = await utapi.deleteFiles(keys);
    return res.success;
  } catch (error) {
    throw new Error(error);
  }
};
