"use client";
import React from "react";
import { Button } from "@nextui-org/react";
const Btn = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default Btn;
