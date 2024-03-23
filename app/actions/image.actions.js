"use server";
import { utapi } from "@/utils/server/uploadthing";

export const uploadImage = async (file) => {
  try {
    const res = await utapi.uploadFiles(file);
    return JSON.parse(JSON.stringify(res));
  } catch (error) {
    console.error("Error uploading image:", error);
    // You can return an object indicating failure or rethrow the error
    throw new Error("Image upload failed");
  }
};
