"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import React, { useEffect, useState } from "react";
import PopoverComp from "./PopoverComp";
import Btn from "./Button";
import DividerComp from "./DividerComp";
import UserComp from "./UserComp";
import Image from "next/image";
import { fetchUserById } from "../actions/users.actions";
import { useUser } from "@clerk/nextjs";
import { Input } from "@nextui-org/react";
import FollowBtn from "./buttons/FollowBtn";
import LikeBtn from "./buttons/LikeBtn";
import CommentBtn from "./buttons/CommentBtn";
import ShareBtn from "./buttons/ShareBtn";
import SaveBtn from "./buttons/SaveBtn";
const PostCard = ({ userId, imageUrl, caption, ...props }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [userData, setUserData] = useState({});
  const [isEditPost, setIsEditPost] = useState(false);
  const { isSignedIn, isLoaded, user } = useUser();
  const fetchUser = async () => {
    const res = await fetchUserById(userId);
    setUserData(res);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Card {...props}>
      <CardHeader>
        <div className="w-full flex justify-between items-center">
          <UserComp
            name={userData?.name}
            username={userData?.username}
            profilePic={userData?.profilePic}
          />
          {user?.publicMetadata.userId === userId ? (
            <PopoverComp
              placement={"bottom-end"}
              radius={"sm"}
              trigger={
                <span className="cursor-pointer font-bold text-lg">...</span>
              }
              children={
                <div className="flex flex-col gap-y-2 items-center px-2 py-2">
                  <Btn
                    text={"Edit Post"}
                    color={"primary"}
                    radius={"sm"}
                    variant={"light"}
                    handleClick={() => {
                      setIsEditPost((pre) => !pre);
                    }}
                  />
                  <DividerComp />
                  <Btn text={"Delete post"} color={"danger"} radius={"sm"} />
                </div>
              }
            />
          ) : (
            <FollowBtn
              isFollowed={isFollowed}
              isLoaded={isLoaded}
              isSignedIn={isSignedIn}
            />
          )}
        </div>
      </CardHeader>
      <DividerComp />
      <CardBody className="h-80">
        <figure className="relative h-64 w-full mb-2">
          <Image
            src={imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Image"
            className="object-contain"
            loading="lazy"
          />
        </figure>
        {isEditPost ? (
          <form className="flex gap-1">
            <Input
              defaultValue={caption}
              autoFocus
              variant="bordered"
              size="sm"
              color="primary"
            />
            <Btn
              type={"submit"}
              text={"update"}
              size={"sm"}
              color={"primary"}
            />
          </form>
        ) : (
          <p className="text-sm">{caption}</p>
        )}
      </CardBody>
      <DividerComp />
      <CardFooter>
        <LikeBtn isLiked={false} isSignedIn={isSignedIn} isLoaded={isLoaded} />
        <CommentBtn />
        <ShareBtn />
        <SaveBtn isSaved={false} isLoaded={isLoaded} isSignedIn={isSignedIn} />
      </CardFooter>
    </Card>
  );
};

export default PostCard;
