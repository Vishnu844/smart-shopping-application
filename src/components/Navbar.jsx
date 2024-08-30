"use client";

import { SignInButton, SignUpButton, useAuth, UserButton } from "@clerk/nextjs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/images/ecom.png";
import Searchbar from "./Searchbar";
import { navigation } from "@/constants";

const Navbar = () => {
  const { userId } = useAuth();
  const [menuState, setMenuState] = useState(false);

  return (
    <nav className="sticky top-0 z-20 bg-gray-50">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <Link href="/">
          <div className="flex-none lg:flex-initial">
            <div
              style={{ position: "relative", width: "120px", height: "50px" }}
            >
              <Image
                src={Logo}
                fill
                sizes="100%"
                alt="logo"
                style={{ objectFit: "contain" }}
                priority={true} 
              />
            </div>
          </div>
        </Link>
        <div className="flex-1 flex items-center justify-between">
          <div
            className={`bg-gray-50 absolute z-20 w-full top-20 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menuState ? "" : "hidden"
            }`}
          >
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-700 hover:text-gray-700/75 transition"
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
              {!userId ? (
                <>
                  <div className="md:hidden flex flex-col items-start gap-5 border-t py-4">
                    <SignInButton />
                    <SignUpButton />
                  </div>
                </>
              ) : (
                <li className="md:hidden text-gray-700 hover:text-gray-700/75 transition">
                  <Link href="/profile">Profile</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <Searchbar />
            {!userId ? (
              <>
                <div className="w-48 md:flex items-center hidden">
                  <div className="hidden md:flex md:gap-4">
                    <div className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-gray-800">
                      <SignInButton />
                    </div>
                    <div className="rounded-md bg-gray-200 px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-300">
                      <SignUpButton />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="md:flex items-center gap-4 hidden">
                  <UserButton />
                </div>
              </>
            )}
            <button
              className="outline-none text-gray-400 block lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <HiOutlineMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
