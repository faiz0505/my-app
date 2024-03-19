"use client";
import React, { useState } from "react";
import Btn from "../Button";
import { handleFollow } from "@/app/actions/social.actions";
const FollowBtn = ({
  isFollowed,
  isLoaded,
  isSignedIn,
  follower,
  following,
  path,
  currentStatus,
}) => {
  const [followingStatus, setFollowingStatus] = useState();
  const handleFollowBtnClick = async () => {
    const res = await handleFollow(follower, following, path);
    setFollowingStatus(res);
  };
  // console.log(currentStatus);
  return (
    <Btn
      color={"primary"}
      variant={
        currentStatus || followingStatus === "followed" ? "bordered" : "solid"
      }
      text={
        currentStatus || followingStatus === "followed" ? "Following" : "Follow"
      }
      isDisabled={(!isLoaded || !isSignedIn) && true}
      handleClick={handleFollowBtnClick}
    />
  );
};

export default FollowBtn;
