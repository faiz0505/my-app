"use client";
import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
const PopoverComp = ({ children, trigger, ...props }) => {
  return (
    <Popover {...props}>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};

export default PopoverComp;
