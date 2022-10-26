/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../../modules/_modules/Header";
import aboutImage1 from "../../../assets/aboutHome1.webp";
import aboutImage2 from "../../../assets/aboutImage2.jpg";
import aboutHeroBg from "../../../assets/about-hero-bg.png";

const Hero = () => {
  return (
    <section className="relative pb-56">
      <img
        src={aboutHeroBg.src}
        alt="about hero image"
        className="absolute w-full h-full top-0 left-0 right-0 -z-10"
      />
      <div className="max-w-7xl mx-auto">
        <Header />

        <div className="grid grid-cols-2 justify-center items-center mt-28 px-28">
          <div className="relative w-fit ">
            <img
              src={aboutImage1.src}
              alt="about home"
              className="w-[20.25rem] h-[26.25rem] object-cover rounded-2xl"
            />
            <img
              src={aboutImage2.src}
              alt="about work illustration"
              className="w-[13.75rem] h-[17.813rem] object-cover absolute bottom-0  right-0 -mr-32 -mb-32 rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-7  ml-auto">
            <p className="text-sky-magnatat text-base font-medium">About us</p>
            <h1 className="text-4xl font-bold text-content-green-primary">
              Owner and investor with a reputation
            </h1>
            <p className="text-base leading-8 text-content-green-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
              Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
              viverra vel ultrices in, congue sed ex.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
