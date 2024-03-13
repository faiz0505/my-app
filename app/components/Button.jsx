"use client";
import React from "react";
import { Button } from "@nextui-org/react";
const Btn = ({ children, text, handleClick, ...props }) => {
  return (
    <Button {...props} onClick={handleClick}>
      {children || text}
    </Button>
  );
};

export default Btn;
