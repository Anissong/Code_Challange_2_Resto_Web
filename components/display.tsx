import React from "react";

const TeamCrew = ({ picture, name }: { picture: any; name: any }) => {
  return (
    <>
      <div className="grid p-[2rem] text-center items-center justify-center">
        <div className="block">
          <img
            src={picture}
            alt="crewpict"
            width={100}
            height={100}
            loading="lazy"
          />
          <span className="text-white">{name.first}</span>
        </div>
      </div>
    </>
  );
};

export default TeamCrew;
