import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="grid text-center items-center  justify-center top-[-10rem] relative text-white z-[-5]">
      <Image
        src="/testimonial-bg.avif"
        alt="background about us"
        width={1800}
        height={500}
        loading="lazy"
        className=" "
      />

      <div className="absolute justify-center pl-[5%] font-bold">
        <h1 className=" text-[3rem] pb-[6rem]">JAMAL RESTAURANT</h1>
        <p className=" text-[2rem] ">
          "We are a fine dining restaurant that have different menu theme
          everyday. <br />
          You will be suprised everytime you visit us. Our Customer come from
          all type of background. <br />
          And because Jamal Restaurant open since 1950, we can guarantee that
          our food have high quality"
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
