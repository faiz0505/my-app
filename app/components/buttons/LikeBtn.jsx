import React from "react";
import Btn from "../Button";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
const LikeBtn = ({ isLiked, isLoaded, isSignedIn }) => {
  return (
    <Btn
      isIconOnly={true}
      variant={"none"}
      icon={
        isLiked ? (
          <FaHeart className="text-xl fill-red-700" />
        ) : (
          <FaRegHeart className="text-xl" />
        )
      }
      radius={"full"}
      isDisabled={(!isLoaded || !isSignedIn) && true}
    />
  );
};

export default LikeBtn;
