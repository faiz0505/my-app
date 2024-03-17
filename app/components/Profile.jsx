"use client";
import React, { useEffect, useState } from "react";
import { userPosts } from "../actions/post.actions";
import { useUser } from "@clerk/nextjs";
import { Spinner } from "@nextui-org/react";

import PostCard from "./PostCard";
import ProfileDetails from "./ProfileDetails";
const Profile = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const fetchPosts = async () => {
    const res = await userPosts(user?.publicMetadata.userId);
    setPosts(res);
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <section className="max-h-[85vh] overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <ProfileDetails />
      <div className="grid gap-2 2xl:grid-cols-2 md:px-1 mt-5 w-full md:w-2/3 mx-auto">
        {posts.map((post) => {
          return (
            <PostCard
              key={post._id}
              isAuthenticated={true}
              userId={post.user.toString()}
              caption={post.caption}
              imageUrl={post.imageUrl}
              shadow={"sm"}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
