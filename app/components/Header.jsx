"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Btn from "./Button";
const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href={"/"}>My-App</Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <SignedIn>
            <div className="flex gap-x-2">
              <Btn
                color={"primary"}
                size={"sm"}
                startContent={<h1 className="text-xl font-bold pb-1">+</h1>}
              >
                <Link href={"/create-post"}>upload post</Link>
              </Btn>
              <UserButton
                afterSignOutUrl="/"
                userProfileMode="navigation"
                userProfileUrl="/user-profile"
              />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex gap-x-2">
              <Btn variant={"ghost"} color={"primary"} size={"sm"}>
                <Link href={"/sign-up"}>Register</Link>
              </Btn>
              <Btn variant={"solid"} color={"primary"} size={"sm"}>
                <Link href={"/sign-in"}>Login</Link>
              </Btn>
            </div>
          </SignedOut>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
