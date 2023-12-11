import Image from "next/image";
import React from "react";

export default function SliderContent({ activeIndex, sliderData }) {
  return (
    <section>
      {sliderData.map(
        (
          slide: { image: string; heading: string; desc: string },
          index: React.Key | null | undefined
        ) => (
          <div
            key={index}
            className={index === activeIndex ? "active slides" : "inactive"}
          >
            <Image
              className="relative animationZoom scale"
              src={slide.image}
              alt="Hero Image"
              width={1800}
              height={500}
            />
            <div className=" absolute w-[100%] h-[100%] z-5  text-white font-bold top-[10%] flex flex-col text-center ">
              <h1 className="text-yellow-500 lg:regular-64 text-[300%] font-bold lg:pt-[5%] lg:pb-[5rem]  pb-[5%] text-decoration underline decoration-yellow-800">
                A Fine Dining
              </h1>
              <h2 className="lg:regular-64 text-[230%] p-3 lg:p-5 animationTrans font-bold">
                {slide.heading}
              </h2>
              <h3 className="lg:regular-32 text-[120%] animationTrans animationDelay ">
                {slide.desc}
              </h3>
            </div>
          </div>
        )
      )}
    </section>
  );
}
