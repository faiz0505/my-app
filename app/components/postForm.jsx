"use client";
import Btn from "@/app/components/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { UploadDropzone } from "@uploadthing/react";
import { deleteImageFromUT } from "@/app/actions/image.delete.action";
import toast from "react-hot-toast";
import { createNewPost } from "@/app/actions/post.actions";
import { useRouter } from "next/navigation";

const postForm = ({ userId }) => {
  const [file, setFile] = useState({
    url: "",
    key: "",
    name: "",
  });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [removeImageLoading, setRemoveImageLoading] = useState(false);
  const router = useRouter();

  const handleDeleteImage = async () => {
    try {
      setRemoveImageLoading(true);
      const deleteImage = await deleteImageFromUT(file.key);
      if (deleteImage) {
        toast.success("Image has been removed successfully");
        setFile({
          url: "",
          key: "",
          name: "",
        });
      }
    } catch (error) {
      ErrorHandler(error);
    } finally {
      setRemoveImageLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      if (!file.url && !file.key) {
        toast.error("please select an image");
      } else {
        const caption = formData.get("caption");
        const data = {
          caption: caption,
          imageUrl: file.url,
          imageKey: file.key,
          user: userId,
        };
        setSubmitLoading(true);
        const newPost = await createNewPost(data);
        if (newPost) {
          toast.success("post uploaded successfully");
          router.push("/user-profile/your-posts");
        } else {
          toast.error("something went wrong");
          const deleteImage = await deleteImageFromUT(file.key);
          if (deleteImage) {
            toast.success("Image has been removed successfully");
            setFile({
              url: "",
              key: "",
              name: "",
            });
          }
        }
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setSubmitLoading(false);
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
          {file.url ? (
            <div className="flex flex-col gap-y-2">
              <figure className="relative h-64 w-full">
                <Image
                  src={file.url}
                  fill
                  objectFit="contain"
                  alt={file.name}
                  priority
                />
              </figure>
              <Btn
                color={"danger"}
                text={"remove"}
                handleClick={handleDeleteImage}
                isLoading={removeImageLoading}
              />
            </div>
          ) : (
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setFile({
                  url: res[0].url,
                  key: res[0].key,
                  name: res[0].name,
                });
              }}
              onUploadError={(error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          )}

          <Input type="text" name="caption" placeholder="caption" />
          <Btn
            type={"submit"}
            text={"submit"}
            color={"primary"}
            isLoading={submitLoading}
          />
        </form>
      </CardBody>
    </Card>
  );
};

export default postForm;
