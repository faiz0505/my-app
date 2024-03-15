"use client";
import React from "react";
import { Button } from "@nextui-org/react";
const Btn = ({ children, text, handleClick, icon, ...props }) => {
  return (
    <Button {...props} onClick={handleClick}>
      {children || text || icon}
    </Button>
  );
};

export default Btn;
