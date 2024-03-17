import React from "react";
import Btn from "../Button";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
const SaveBtn = ({ isSaved, isLoaded, isSignedIn }) => {
  return (
    <Btn
      className={"ml-auto"}
      isIconOnly={true}
      variant={"none"}
      icon={
        isSaved ? (
          <FaBookmark className="text-xl" />
        ) : (
          <FaRegBookmark className="text-xl" />
        )
      }
      radius={"full"}
      isDisabled={(!isLoaded || !isSignedIn) && true}
    />
  );
};

export default SaveBtn;
