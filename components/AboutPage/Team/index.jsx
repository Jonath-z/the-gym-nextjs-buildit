import React from "react";
import AboutCard from "../../modules/cards/AboutCard";
import Button from "../../modules/_modules/Button";

const teamMembers = [
  {
    image: "../../../images/aboutImage1.png",
    name: "name surname",
    description: "work",
  },
  {
    image: "../../../images/aboutImage2.png",
    name: "name surname",
    description: "work",
  },
  {
    image: "../../../images/aboutImage3.png",
    name: "name surname",
    description: "work",
  },
  {
    image: "../../../images/aboutImage4.png",
    name: "name surname",
    description: "work",
  },
  {
    image: "../../../images/aboutImage5.png",
    name: "name surname",
    description: "work",
  },
  {
    image: "../../../images/aboutImage6.png",
    name: "name surname",
    description: "work",
  },
  {
    image: "../../../images/aboutImage7.png",
    name: "name surname",
    description: "work",
  },
  {
    image: "../../../images/aboutImage8.png",
    name: "name surname",
    description: "work",
  },
  {
    image: "../../../images/aboutImage9.png",
    name: "name surname",
    description: "work",
  },
];

const Team = () => {
  return (
    <div className="bg-secondary-bg py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 justify-center items-center py-10">
          <p className=" text-base text-sky-magnatat font-medium">Our team</p>
          <h2 className="text-4xl font-bold text-content-green-primary">
            Let’s meet
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5 max-w-screen-lg mx-auto mt-10">
          {teamMembers.map((member, index) => {
            return <AboutCard content={member} key={index} />;
          })}
        </div>

        <div className=" flex justify-between my-20 py-10 border-t border-b border-content-green-primary items-center">
          <h3 className="text-4xl text-content-green-primary font-bold">
            Call Us
          </h3>
          <div className="flex gap-5">
            <Button
              title="Call"
              className="bg-primary-green rounded-xsm text-white h-11 px-28 font-bold z-20"
            />

            <Button
              title="Email"
              className="bg-sky-violet rounded-xsm text-content-green-primary h-11 px-16  font-bold z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
