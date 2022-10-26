/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../modules/_modules/Button";
import Header from "../../modules/_modules/Header";

import home1 from "../../../assets/home1.jpeg";
import home2 from "../../../assets/home2.jpeg";
import home3 from "../../../assets/home3.jpg";
import home4 from "../../../assets/home4.jpeg";
import home5 from "../../../assets/home5.jpeg";

const HeroSection = () => {
  return (
    <section className="h-[899px] overflow-y-hidden relative">
      <div className="absolute right-0 top-0 -z-10 h-full w-1/2">
        <img
          src="/hero-bg-image.png"
          alt="hero bg"
          className="h-max object-cover w-full "
        />
      </div>
      <div className="absolute top-0 left-0 right-0 -z-20 h-full w-full">
        <img
          src="/hero-bg-primary.png"
          alt="linear bg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <Header />

        <div className=" grid grid-cols-2 gap-20  mt-20 pb-24">
          <div className="flex flex-col gap-5 mt-24">
            <h1 className="text-content-green-primary text-6.5xl font-bold leading-[5rem]">
              Developement <br /> company
            </h1>

            <p className="text-content-green-secondary text-s2xl text font-normal">
              Forward-thinking real estate developer, owner <br /> and investor
              with a reputation
            </p>
            <div className="flex gap-5 pt-20">
              <Button
                title="Services"
                className="py-6 px-10 bg-primary-green text-white font-bold  rounded-xsm text-xsm"
              />
              <Button
                title="About the company"
                className="bg-sky-violet py-6 rounded-xsm w-64 text-content-green-primary font-bold font-xsm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex items-baseline gap-10">
              <img
                src={home1.src}
                alt="home 1"
                className="w-40 h-40 object-cover ml-auto"
              />
              <img
                src={home2.src}
                alt="home 2"
                className="w-56 h-56 object-cover"
              />
              <img
                src={home3.src}
                alt="home 3"
                className=" w-32 h-32 object-cover "
              />
            </div>
            <div className="grid grid-cols-2 gap-x-10">
              <img
                src={home4.src}
                alt="home 4"
                className="h-80 w-80 object-cover"
              />
              <img
                src={home5.src}
                alt="home 6"
                className="w-44 h-44 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
