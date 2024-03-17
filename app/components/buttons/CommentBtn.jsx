"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  User,
  Divider,
} from "@nextui-org/react";
import { FaRegComment, FaTrash } from "react-icons/fa6";
import UserComp from "../UserComp";
import Btn from "../Button";

const CommentBtn = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [press, setPresss] = useState(false);
  let authenticated = true;
  let arr = ["dhfd", "dgidpq", "dhfgg", "dwwiupw"];
  const handleClick = () => {
    setPresss(!press);
  };
  const handleDelete = () => {};
  return (
    <>
      <Btn
        icon={<FaRegComment className="text-xl" />}
        isIconOnly={true}
        variant={"none"}
        radius={"full"}
        onPress={onOpen}
      />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Comments
              </ModalHeader>
              <ModalBody>
                {press && authenticated && (
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-red-500">
                      Are you want to delete your comment
                    </p>
                    <Btn
                      isIconOnly={true}
                      color={"danger"}
                      radius={"full"}
                      size={"sm"}
                      icon={<FaTrash />}
                    />
                  </div>
                )}
                <Divider />
                {arr.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex justify-between"
                      onClick={handleClick}
                    >
                      <UserComp
                        name={"faizali"}
                        username={item}
                        profilePic={""}
                      />
                      <p className="text-xs font-thin">11-01-2024</p>
                    </div>
                  );
                })}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommentBtn;
