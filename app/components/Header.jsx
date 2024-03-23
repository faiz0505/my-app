"use client";
import { useSession, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUserRole } from "@/utils/userUtils";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { title: "Profile", url: "/profile" },
    { title: "Dashboard", url: "/user" },
    { title: "Admin Dashboard", url: "/admin", role: "admin" },
    // Add more placeholder links as needed
  ];
  const { session } = useSession();
  const userRole = checkUserRole(session);
  // console.log(userRole);
  return (
    <header className="text-gray-600 body-font bg-white shadow">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <span className="ml-3 text-xl">SecureClerk</span>
          </a>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <SignedIn>
            {links.map((link) =>
              (link.role === "admin" && userRole === "org:admin") ||
              !link.role ? (
                <Link key={link.title} href={link.url}>
                  {/* Use a div instead of an anchor tag */}
                  <div className="mr-5 cursor-pointer hover:text-gray-900">
                    {link.title}
                  </div>
                </Link>
              ) : null
            )}
          </SignedIn>
          {/* Add more links directly here as needed */}
        </nav>
        <div className="md:flex items-center">
          <SignedOut>
            <a href="/sign-in">
              <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base mr-4">
                Login
              </button>
            </a>
            <a href="/sign-up">
              <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base">
                Sign Up
              </button>
            </a>
          </SignedOut>

          {/* UserButton Component */}
          <SignedIn>
            <div className="ml-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// "use client";
// import React from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
// } from "@nextui-org/navbar";
// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import Link from "next/link";
// import Btn from "./Button";
// const Header = () => {
//   return (
//     <Navbar>
//       <NavbarBrand>
//         <Link href={"/"}>My-App</Link>
//       </NavbarBrand>
//       <NavbarContent justify="end">
//         <NavbarItem>
//           <SignedIn>
//             <div className="flex gap-x-2">
//               <Btn
//                 color={"primary"}
//                 size={"sm"}
//                 startContent={<h1 className="text-xl font-bold pb-1">+</h1>}
//               >
//                 <Link href={"/create-post"}>upload post</Link>
//               </Btn>
//               <UserButton
//                 afterSignOutUrl="/"
//                 userProfileMode="navigation"
//                 userProfileUrl="/user-profile"
//               />
//             </div>
//           </SignedIn>
//           <SignedOut>
//             <div className="flex gap-x-2">
//               <Btn variant={"ghost"} color={"primary"} size={"sm"}>
//                 <Link href={"/sign-up"}>Register</Link>
//               </Btn>
//               <Btn variant={"solid"} color={"primary"} size={"sm"}>
//                 <Link href={"/sign-in"}>Login</Link>
//               </Btn>
//             </div>
//           </SignedOut>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// };

// export default Header;
