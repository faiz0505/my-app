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
import Profile from "./Profile";
const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href={"/"}>My-App</Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              userProfileMode="navigation"
              userProfileUrl="/user-profile"
            />
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
