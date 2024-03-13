"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import React, { useEffect, useState } from "react";
// import PopoverComp from "./PopoverComp";
import Btn from "./Button";
import {
  FaEllipsis,
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaRegPaperPlane,
} from "react-icons/fa6";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import DividerComp from "./DividerComp";
import UserComp from "./UserComp";

import Image from "next/image";
const PostCard = ({ isAuthenticated, user, imageUrl, caption }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card>
      <CardHeader>
        {isAuthenticated ? (
          <div className="ml-auto">
            <PopoverComp
              placement={"top-left"}
              radius={"none"}
              trigger={<FaEllipsis />}
              children={
                <div className="flex flex-col gap-y-2 items-center">
                  <Link href={"/edit-post"}>Edit Post</Link>
                  <DividerComp />
                  <Btn text={"Logout"} color={"danger"} radius={"none"} />
                </div>
              }
            />
          </div>
        ) : (
          <div className="w-full flex justify-between items-center">
            <UserComp
            // name={userInfo.name}
            // description={userInfo.username}
            // profilePic={userInfo.profilePicture}
            />
            <Btn
              color={"primary"}
              variant={isFollowed ? "bordered" : "solid"}
              text={"Follow"}
              // handleClick={() => handleFollow()}
            />
          </div>
        )}
      </CardHeader>
      <DividerComp />
      <CardBody>
        <figure className="relative h-64 w-full mb-2">
          <Image
            src={imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Image"
            className="px-2"
            objectFit="contain"
            loading="lazy"
          />
        </figure>
        <p className="text-sm">{caption}</p>
      </CardBody>
      <DividerComp />
      <CardFooter>
        <Btn
          isIcon={true}
          variant={"none"}
          icon={<FaRegHeart className="text-xl" />}
          radius={"full"}
        />
        <Btn
          isIcon={true}
          variant={"none"}
          icon={<FaRegComment className="text-xl" />}
          radius={"full"}
        />
        <Btn
          isIcon={true}
          variant={"none"}
          icon={<FaRegPaperPlane className="text-xl" />}
          radius={"full"}
        />
        <Btn
          className={"ml-auto"}
          isIcon={true}
          variant={"none"}
          icon={<FaRegBookmark className="text-xl" />}
          radius={"full"}
        />
      </CardFooter>
    </Card>
  );
};

export default PostCard;
