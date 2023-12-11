import React from "react";

const Arrow = ({ prevSlide, nextSlide }) => {
  return (
    <div className=" bg-transparent text-white w-[100%] h-[100%] cursor-pointer z-5 font-bold flex text-center justify-between absolute top-[35%] p-5 lg:regular-64 regular-24">
      <span onClick={prevSlide}>&#10094;</span>
      <span onClick={nextSlide}>&#10095;</span>
    </div>
  );
};

export default Arrow;
