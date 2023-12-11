"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav_Links } from "@/constant";
import Button from "@/components/Button";
import Humberger from "./Humberger";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleNavbar = () => {
    setToggle(() => !toggle);
  };

  return (
    <nav className=" bg-zinc-900 lg:flexBetween py-5 px-12  relative">
      <div className="flexBetween">
        <Link href="/">
          <Image src="/letter-j.avif" alt="" width={40} height={40} />
        </Link>
        <button
          className="flex flex-col gap-1.5 lg:hidden "
          onClick={toggleNavbar}
        >
          <Humberger />
        </button>
      </div>
      <ul
        className={`ml-[7rem] flex  lg:flex-row gap-10 lg:z-auto z-[1] flex-col items-center pt-20 lg:pt-0 absolute lg:static w-full  right-0 lg:w-auto transition-all duration-500 ease-in-out ${
          toggle ? " bg-black left-[0rem] h-[100vh]" : " left-[1450px]"
        }`}
      >
        {Nav_Links.map((item) => (
          <Link
            href={item.href}
            key={item.key}
            className={`regular-24 text-white  cursor-pointer hover:underline hover:underline-offset-8 hover:text-black lg:hover:text-white hover:decoration-yellow-500 font-bold transition-all text-[30px] ${
              toggle
                ? "hover:bg-[linear-gradient(90deg,_#FFD369_0%,_#E3651D_100%)] rounded-2xl hover:text-black hover:font-bold px-4 py-1 hover:no-underline"
                : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter ">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </nav>
  );
};

export default Navbar;
