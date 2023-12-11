import Image from "next/image";
import React from "react";
import TeamCrew from "@/components/display";

const page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`);
  const crew = await response.json();

  return (
    <>
      <h1 className="text-center text-white text-6xl font-bold py-[3rem] bg-yellow-500 decoration-white">
        Our Chef Crew
      </h1>
      <div>
        {crew.results.map((data: any) => {
          return (
            <TeamCrew
              key={data.name}
              picture={data.picture.thumbnail}
              name={data.name}
            />
          );
        })}
        ;
      </div>
    </>
  );
};
export default page;
