import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className=" grid lg:grid-cols-2 grid-rows px-[15%] lg:px-[7rem] lg:pt-[7rem] pt-[10%] text-center lg:gap-[10rem] mf:gap[7rem] gap-[2%]  place-items-center pb-[13rem]">
      <div className="text-white self-center lg:mb-0 mb-[3rem]">
        <h5 className="text-orange-300 font-bold regular-[5rem] pb-[3rem] ">
          OUR STORY
        </h5>
        <h1 className="lg:regular-64 md:text-[4rem] text-[2rem] pb-[4rem]">
          Every Flavor Tells a Story
        </h1>
        <Link className="button" href="/AboutUs">
          About Us
        </Link>
        <p className="py-[4rem]">
          Lorem Ipsum is simply dummy text of the printingand typesetting
          industry lorem Ipsum has been the industrys standard dummy text ever
          since the when an unknown printer took a galley of type and scrambled
          it to make a type specimen book It has survived not only five
          centuries, but also the leap into.
        </p>
        <span>
          Book Through Call <br /> +62 123 456
        </span>
      </div>
      <div className="relative">
        <Image
          className=""
          src="/about-banner.avif"
          alt="Restaurant Photo"
          width={800}
          height={300}
          loading="lazy"
        />
        <Image
          className="absolute  -translate-y-[70%] -translate-x-[30%] left-0 lg:w-[55%] md:w-[60%] w-[50%]"
          src="/about-abs-image-_1_.avif"
          alt="our chef"
          width={400}
          height={300}
          loading="lazy"
        />
        <div className="absolute right-0 top-0 -translate-y-[50%] z-5">
          <Image
            className="absolute"
            src="/badge-2.png"
            alt="badge since"
            width={150}
            height={150}
            loading="lazy"
          />
          <Image
            src="/badge-2-bg.png"
            alt="badge description"
            width={150}
            height={150}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
