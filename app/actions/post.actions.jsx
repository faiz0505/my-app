"use server";

import { dbConnection } from "@/lib/db/connection";
import { postModel } from "@/lib/db/models";
import PostCard from "@/app/components/PostCard";
import { ErrorHandler } from "@/utils/errorHandler";
export const allPosts = async (userId) => {
  // console.log(userId);
  try {
    await dbConnection();
    const posts = await postModel.find();
    return posts.map((post) => {
      return (
        <PostCard
          key={post._id}
          isAuthenticated={post.user.toString() === userId}
          user={post.user.toString()}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      );
    });
  } catch (error) {
    console.log(error);
  }
};

export const userPosts = async (userId) => {
  try {
    await dbConnection();
    const allPosts = await postModel.find();
    const posts = allPosts.filter((post) => post.user.toSting() === userId);

    return JSON.stringify(posts);
  } catch (error) {
    console.log(error);
  }
};

export const createNewPost = async (data) => {
  try {
    await dbConnection();
    const newPost = await postModel.create({
      caption: data.caption,
      imageUrl: data.imageUrl,
      imageKey: data.imageKey,
      createdAt: new Date().toLocaleDateString(),
      updatedAt: "",
      user: data.user,
    });
    return JSON.parse(JSON.stringify(newPost));
  } catch (error) {
    ErrorHandler(error);
  }
};
