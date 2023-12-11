import { services } from "@/constant/services_home";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Description = () => {
  return (
    <div className="text-center pt-[4%] lg:px-[7rem] px-[10%] bg-[url('/bg.avif')] height-[100vh] width-auto">
      <h4 className="text-yellow-500 font-bold lg:pb-[2rem] pb-[1rem] lg:text-[2rem] text-[1.5rem]">
        FLAVORS FOR ROYALTY
      </h4>
      <h1 className="text-white lg:text-[5rem] text-[3rem]">
        We Offer Top Notch
      </h1>
      <div className="  hover:scale-105  delay-300 my-[4rem]">
        <Link
          className="button hover:border-none hover:bg-orange-500 hover:text-white"
          href="/MenuAndServices"
        >
          Menu and Services
        </Link>
      </div>
      <p className="lg:text-[1.2rem] text-[85%] text-center text-white font-bold lg:pb-[4rem] pb-[3rem]">
        Lorem Ipsum is simply dummy text of the printing <br />
        and typesetting industry lorem Ipsum has been the industrys
        <br />
        standard dummy text ever.
      </p>

      <div className="flex lg:flex-row flex-col text-center width-[100%] width-auto justify-between lg:px-0 lg:gap-[2rem] gap-0 px-[28%]">
        {services.map((service, index) => (
          <div
            key={index}
            className={
              index % 2
                ? "hover:scale-105 delay:1000 text-center"
                : "hover:scale-105 overflow-hidden lg:-translate-y-1/3 delay:300"
            }
          >
            <Image
              src={service.image}
              alt="our offer "
              width={400}
              height={100}
              loading="lazy"
            />
            <h2 className="text-white lg:regular-32 regular-16 font-bold lg:mb-[2rem] mb-[25%] lg:mt-[2rem] mt-[1rem] border-orange-500 border-y-4 ">
              {service.description}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
