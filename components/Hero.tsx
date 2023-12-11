"use client";

import React, { useState, useEffect } from "react";
import SliderContent from "./Slider_Content";
import { sliderData } from "@/constant/Slider_Data";
import Arrow from "./Arrow";

const len = sliderData.length - 1;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3500);

    return () => {
      clearTimeout(interval);
    };
  }, [activeIndex]);

  return (
    <div className="slider-container ">
      <SliderContent activeIndex={activeIndex} sliderData={sliderData} />
      <Arrow
        prevSlide={() =>
          setActiveIndex(activeIndex === 0 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    </div>
  );
}
