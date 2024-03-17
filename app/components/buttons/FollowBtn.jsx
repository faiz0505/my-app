import React from "react";
import Btn from "../Button";
const FollowBtn = ({ isFollowed, isLoaded, isSignedIn }) => {
  return (
    <Btn
      color={"primary"}
      variant={isFollowed ? "bordered" : "solid"}
      text={"Follow"}
      isDisabled={(!isLoaded || !isSignedIn) && true}
    />
  );
};

export default FollowBtn;
