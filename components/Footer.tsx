import React from "react";

const Footer = () => {
  return (
    <div className="py-[2rem] bg-[url('/bg.avif')]  px-[4%] top-[50%] items-center text-white regular-24 bottom-0">
      <div>
        <span className="">Contact Us</span>
        <hr />
      </div>
      <div className="  cursor-pointer ">
        <span>
          <a className="border-r-4 hover:text-yellow-500 pr-[1rem]">
            FACEBOOK{" "}
          </a>
        </span>
        <span>
          <a className="border-r-4 hover:text-yellow-500 pr-[1rem]">
            {" "}
            INSTAGRAM{" "}
          </a>
        </span>
        <span>
          <a className="border-r-4 hover:text-yellow-500 pr-[1rem]">
            {" "}
            TWITTER{" "}
          </a>
        </span>
        <span>
          <a className=" hover:text-yellow-500"> YOUTUBE </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
