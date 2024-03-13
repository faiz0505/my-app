"use server";
const { ErrorHandler } = require("@/utils/errorHandler");
const { utApi } = require("@/utils/uploadthing");

export const deleteImageFromUT = async (keys) => {
  try {
    const res = await utApi.deleteFiles(keys);
    return res.success;
  } catch (error) {
    ErrorHandler(error);
  }
};
