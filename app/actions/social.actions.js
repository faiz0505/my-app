"use server";

import { dbConnection } from "@/lib/db/connection";
import { userModel } from "@/lib/db/models";
import { revalidatePath } from "next/cache";

export const handleFollow = async (followerUserId, followingUserId, path) => {
  try {
    await dbConnection();
    const followerUser = await userModel.findById(followerUserId);
    const followingUser = await userModel.findById(followingUserId);
    if (!followerUser || !followingUser) {
      throw new Error("Follower or Followee not found");
    }
    const isFollowing = followerUser.followers.includes(followingUserId);
    if (isFollowing) {
      // unfollow
      followerUser.followers.pull(followingUserId);
      followingUser.followings.pull(followerUserId);
    } else {
      // follow
      followerUser.followers.push(followingUserId);
      followingUser.followings.push(followerUserId);
    }
    await Promise.all([followerUser.save(), followingUser.save()]);
    revalidatePath(path);
    return isFollowing ? "unfollowed" : "followed";
  } catch (error) {
    throw new Error(error);
  }
};

// get follows
export const getFollows = async (user, req) => {
  try {
    await dbConnection();
    const userData = await userModel.findById(user);
    if (req === "followers") {
      return JSON.parse(JSON.stringify(userData.followers));
    } else {
      return JSON.parse(JSON.stringify(userData.followings));
    }
  } catch (error) {
    throw new Error(error);
  }
};
