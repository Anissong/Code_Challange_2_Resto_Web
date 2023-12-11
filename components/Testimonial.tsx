import { testimony } from "@/constant/testimony";
import React from "react";

const Testimonial = () => {
  return (
    <div className=" text-center text-white  pb-[10rem] px-[10rem]">
      <h1 className="lg:text-[3rem] text-[2rem] border-t-4 border-double border-yellow-200 rounded-lg pt-[2rem]">
        TESTIMONIALS
      </h1>
      <div className="lg:flex block gap-[7rem] justify-center align-center lg:pt-[6rem] pt-[4rem]">
        {testimony.map((point) => (
          <div
            key={point.id}
            className="lg:mt-0 mt-[2rem] border-l-4 border-b-4 rounded-lg border-yellow-400"
          >
            " {point.Input} "
            <br />
            <br />- {point.Consument}
          </div>
        ))}
        {/* <div className="bg-yellow-200 rounded-md">
          "The food is on another level
          <br />
          we were eat, and went home happily <br />
          Recommended indeed!!!
          <br />
          -Sarah
        </div>
        <div>
          "The food is on another level
          <br />
          we were eat, and went home happily <br />
          Recommended indeed!!!
          <br />
          -John
        </div>
        <div>
          "The food is on another level
          <br />
          we were eat, and went home happily <br />
          Recommended indeed!!!
          <br />
          -Sean
        </div> */}
      </div>
    </div>
  );
};

export default Testimonial;
