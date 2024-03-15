import React from "react";
import { User } from "@nextui-org/user";
const UserComp = ({ name, username, profilePic }) => {
  return (
    <User
      name={name}
      description={username}
      avatarProps={{
        src: profilePic,
        showFallback: true,
      }}
    />
  );
};

export default UserComp;
