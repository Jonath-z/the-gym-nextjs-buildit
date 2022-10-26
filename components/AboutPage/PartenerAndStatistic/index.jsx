/* eslint-disable @next/next/no-img-element */
import React from "react";
import HandTouchIcon from "../../modules/vectors/HandTouchIcon";
import HouseIcon from "../../modules/vectors/HouseIcon";
import LocationIcon from "../../modules/vectors/LocationIcon";
import statisticBg from "../../../assets/statisticBg.png";
import PartenersLogos from "../../modules/_modules/PartenersLogos";

const statistics = [
  {
    icon: <LocationIcon />,
    value: ">200",
    description: "Number",
  },
  {
    icon: <HouseIcon />,
    value: ">70",
    description: "Number",
  },
  {
    icon: <HandTouchIcon />,
    value: ">20",
    description: "Number",
  },
];

const PartenerAndStatistic = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-28">
        <div className="flex flex-col gap-5 justify-center items-center py-10">
          <p className=" text-base text-sky-magnatat font-medium">Statistics</p>
          <h2 className="text-4xl font-bold text-content-green-primary">
            Development in numbers
          </h2>
        </div>

        <div className="relative max-w-screen-lg mx-auto mt-32">
          <img
            src={statisticBg.src}
            alt="statistic bg"
            className="absolute top-0 left-0 right-0 bottom-0 h-full w-full -z-10"
          />
          <div className="grid grid-cols-3 justify-center items-center divide-x-2 divide-content-green-primary/60 py-10 px-20 gap-5 rounded-md shadow-2xl shadow-btn-shadow/50">
            {statistics.map((statistic, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-10 justify-center items-center"
                >
                  <div className="bg-content-green-secondary w-[70px] h-[70px] flex justify-center items-center rounded-md">
                    {statistic.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-4xl font-bold text-content-green-primary">
                      {statistic.value}
                    </p>
                    <p className="text-base text-content-green-secondary/70 font-bold">
                      {statistic.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <PartenersLogos />
        </div>
      </div>
    </section>
  );
};

export default PartenerAndStatistic;
