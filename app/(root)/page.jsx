"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { ErrorHandler } from "../utils/errorHandler";
import { createUser } from "../actions/users.actions";
const page = () => {
  const user = {
    clerkId: "sdh_dhsg",
    email: "faizali@gmail.com",
    username: "username",
    name: "first_name",
    profilePic: "image_url",
  };
  const sendData = async () => {
    try {
      const newUser = await createUser(user);
      console.log(newUser);
    } catch (error) {
      ErrorHandler(error);
    }
  };
  return (
    <div>
      <Button onPress={sendData}>send data</Button>
    </div>
  );
};

export default page;
