import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import React from "react";
import Btn from "./Button";
import Link from "next/link";
import { Avatar } from "@nextui-org/avatar";

const ProfileDetails = () => {
  return (
    <Card radius="none" className=" border border-gray-200 w-full">
      <CardHeader className="justify-between">
        <h1 className="font-bold">{"username_of_user"}</h1>
        <Btn color={"primary"} size={"sm"}>
          <Link href={"/"}>Back to Home</Link>
        </Btn>
      </CardHeader>
      <CardBody>
        <div className="flex justify-between items-start">
          <aside>
            <Avatar src="" showFallback size="lg" />
            <h4 className="text-sm my-2">User Name</h4>
          </aside>
          <aside className="flex md:gap-x-5 gap-x-2">
            <div className="flex flex-col items-center">
              <h2 className="font-bold md:text-lg">{34}</h2>
              <p className="text-sm">Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-bold md:text-lg">{10}</h2>
              <p className="text-sm">Followings</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-bold md:text-lg">{10}</h2>
              <p className="text-sm">Posts</p>
            </div>
          </aside>
        </div>
        <p className="text-xs w-3/4 opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          totam dignissimos voluptas, minus cupiditate ullam?
        </p>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default ProfileDetails;
