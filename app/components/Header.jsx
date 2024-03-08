import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>My-APP</NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <button>
              <Link href={"/sign-in"}>SignIn</Link>
            </button>
          </SignedOut>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
