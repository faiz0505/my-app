import React from "react";
import { allPosts } from "@/app/actions/post.actions";
// import { getFollowes } from "../actions/follow.action";
const page = async () => {
  const posts = await allPosts();
  // const data = await getFollowes();
  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-2 md:px-8 lg:px-20 py-5">
      {posts}
    </main>
  );
};

export default page;
