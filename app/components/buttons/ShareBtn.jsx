import React from "react";
import Btn from "../Button";
import { FaRegPaperPlane } from "react-icons/fa6";
const ShareBtn = () => {
  return (
    <Btn
      isIconOnly={true}
      variant={"none"}
      icon={<FaRegPaperPlane className="text-xl" />}
      radius={"full"}
    />
  );
};

export default ShareBtn;
