/* eslint-disable @next/next/no-img-element */
import React from "react";
import socialHome1 from "../../../assets/socialhome1.jpeg";
import socialHome2 from "../../../assets/socialHome2.jpeg";
import socialHome3 from "../../../assets/socialHome3.jpeg";
import socialHome4 from "../../../assets/socialHome4.webp";
import socialHome5 from "../../../assets/socialhome5.jpeg";
import people from "../../../assets/socialPeople.jpeg";

const SocialSection = () => {
  return (
    <section className="bg-secondary-bg">
      <div className="py-20 max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 justify-center items-center py-10">
          <p className=" text-base text-sky-magnatat">Socials</p>
          <h2 className="text-4xl font-bold text-content-green-primary">
            On Instagram
          </h2>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-5 h-[36rem] mt-5">
          <img
            src={socialHome1.src}
            alt="social hom1"
            className="w-full h-full object-cover"
          />
          <img
            src={socialHome2.src}
            alt="social hom2"
            className="w-full h-full object-cover"
          />
          <img
            src={people.src}
            alt="social poeple"
            className="w-full h-full object-cover"
          />
          <img
            src={socialHome3.src}
            alt="social hom3"
            className="w-full h-full object-cover"
          />
          <img
            src={socialHome4.src}
            alt="social hom4"
            className="w-full h-full object-cover"
          />
          <img
            src={socialHome5.src}
            alt="social hom5"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
