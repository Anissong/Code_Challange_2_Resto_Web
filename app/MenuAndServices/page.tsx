import React from "react";
import { Main_Menu_Lists } from "@/constant/MainMenuList";
import Image from "next/image";

const page = () => {
  return (
    <div className="px-[7rem] w-auto mt-[4rem] ">
      <div className="text-center px-[7rem]">
        <h1 className="text-[3rem] text-yellow-500 p-[1rem] border rounded-lg border-yellow-500">
          Menu This Month
        </h1>
        <div className="text-[2rem] text-white pb-24">Special Menu</div>
      </div>
      <div className=" grid lg:grid-cols-2 grid-rows gap-[2rem] justify-center items-center">
        {Main_Menu_Lists.map((service, index) => (
          <div
            className="items-center pb-[5rem] lg:flex  justify-center block"
            key={index}
          >
            <Image
              src={service.image}
              alt={service.desc}
              width={100}
              height={100}
              loading="lazy"
              className="justify-center"
            />

            <div className="text-white text-[1.5rem] pl-[1rem]">
              <h3 className="pb-[1rem]">
                {service.name} <span>{service.price}</span>
              </h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
