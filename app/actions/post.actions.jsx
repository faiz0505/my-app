"use server";

import { dbConnection } from "@/lib/db/connection";
import { postModel } from "@/lib/db/models";
import PostCard from "@/app/components/PostCard";
import { auth } from "@clerk/nextjs";
import { ErrorHandler } from "@/utils/errorHandler";
const { userId } = auth();
export const allPosts = async () => {
  // console.log(userId);
  try {
    await dbConnection();
    const posts = await postModel.find();
    return posts.map((post) => {
      // console.log(post.user.toString());
      return (
        <PostCard
          key={post._id}
          isAuthenticated={userId === post.user && true}
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

export const userPosts = async () => {
  try {
    await dbConnection();
    const allPosts = await postModel.find();
    const posts = allPosts.filter((post) => post.user === userId);

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
