"use client";
import Btn from "@/app/components/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { UploadDropzone } from "@uploadthing/react";
import { deleteImageFromUT } from "@/app/actions/image.delete.action";
import toast from "react-hot-toast";
import { createNewPost } from "@/app/actions/post.actions";
import { useRouter } from "next/navigation";
import { FileUploader } from "react-drag-drop-files";
import { uploadImage } from "../actions/image.actions";
import { uploadFiles } from "@/utils/client/uploadthing";

const postForm = ({ userId }) => {
  const [imageUrl, setImageUrl] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const handleImageChange = async (file) => {
    if (file.url) {
      URL.revokeObjectURL(file.url);
    }
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const image = formData.getAll("image");
      const caption = formData.get("caption");
      if (!image[0].size > 0) {
        toast.error("please select an Image");
      } else {
        setIsLoading(true);
        const res = await uploadFiles("imageUploader", {
          files: image,
        });
        if (res) {
          const uploadPost = await createNewPost({
            caption: caption,
            imageUrl: res[0].url,
            imageKey: res[0].key,
            user: userId,
          });
          if (uploadPost) {
            toast.success("post uploaded successfully");
            router.push("/user-profile/user-posts");
          }
        } else {
          toast.error("image upload failed please try again");
        }
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Card className="md:w-[40vw] w-full">
      <CardHeader className="justify-between">
        <h2>Upload new post</h2>
        <Btn color={"primary"} size={"sm"}>
          <Link href={"/"}>Back to Home</Link>
        </Btn>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
          {imageUrl && (
            <div>
              <figure className="relative h-64 w-full">
                <Image
                  src={imageUrl}
                  fill
                  objectFit="contain"
                  alt={""}
                  priority
                />
              </figure>
            </div>
          )}

          <FileUploader
            name="image"
            types={["JPG", "PNG", "JPEG", "GIF"]}
            handleChange={handleImageChange}
          />

          <Input type="text" name="caption" placeholder="caption" />
          <Btn
            type={"submit"}
            text={"submit"}
            color={"primary"}
            isLoading={isLoading}
          />
        </form>
      </CardBody>
    </Card>
  );
};

export default postForm;
