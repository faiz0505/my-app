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
import DividerComp from "./DividerComp";
import UserComp from "./UserComp";
import Image from "next/image";
import { fetchUserById } from "../actions/users.actions";
import { useAuth, useUser } from "@clerk/nextjs";
const PostCard = ({ userId, imageUrl, caption }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [userData, setUserData] = useState({});
  const [authenticatedUser, setAuthenticatedUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // console.log(userId);
  // const { isLoaded, isSignedIn } = useAuth();
  const { isSignedIn, isLoaded, user } = useUser();
  const fetchUser = async () => {
    const res = await fetchUserById(userId);
    setUserData(res);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <Card>
      <CardHeader>
        {user?.publicMetadata.userId === userId ? (
          <div className="ml-auto">
            {/* <PopoverComp
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
            /> */}
          </div>
        ) : (
          <div className="w-full flex justify-between items-center">
            <UserComp
              name={userData.name}
              username={userData.username}
              profilePic={userData.profilePic}
            />
            <Btn
              color={"primary"}
              variant={isFollowed ? "bordered" : "solid"}
              text={"Follow"}
              isDisabled={(!isLoaded || !isSignedIn) && true}
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
            className="px-2 object-contain"
            loading="lazy"
          />
        </figure>
        <p className="text-sm">{caption}</p>
      </CardBody>
      <DividerComp />
      <CardFooter>
        <Btn
          isIconOnly={true}
          variant={"none"}
          icon={<FaRegHeart className="text-xl" />}
          radius={"full"}
        />
        <Btn
          isIconOnly={true}
          variant={"none"}
          icon={<FaRegComment className="text-xl" />}
          radius={"full"}
        />
        <Btn
          isIconOnly={true}
          variant={"none"}
          icon={<FaRegPaperPlane className="text-xl" />}
          radius={"full"}
        />
        <Btn
          className={"ml-auto"}
          isIconOnly={true}
          variant={"none"}
          icon={<FaRegBookmark className="text-xl" />}
          radius={"full"}
        />
      </CardFooter>
    </Card>
  );
};

export default PostCard;
