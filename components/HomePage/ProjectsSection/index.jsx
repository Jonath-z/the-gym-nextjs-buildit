/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../modules/_modules/Button";
import projectHome1 from "../../../assets/projectHome1.jpeg";
import projectHome2 from "../../../assets/projectHome2.webp";
import projectHome3 from "../../../assets/projectHouse3.jpeg";
import projectHome4 from "../../../assets/projectHome4.webp";

const ProjectsSection = () => {
  return (
    <section className="py-32 bg-primary-bg">
      <div className="grid grid-cols-2 items-center max-w-7xl mx-auto">
        <div className="flex flex-col gap-7 w-[33.7rem] ml-auto">
          <p className="text-sky-magnatat text-base font-medium">
            Available Properties
          </p>
          <h1 className="text-4xl font-bold text-content-green-primary">
            Featured Listing
          </h1>
          <p className="text-base leading-8 text-content-green-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </p>

          <Button
            title="Explore"
            className="bg-primary-green rounded-xsm text-white h-11 w-56 font-bold shadow-2xl shadow-btn-shadow/60"
          />
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-5 ">
          <img
            src={projectHome1.src}
            alt="project home 1"
            className="w-60 h-52 ml-auto mt-auto object-cover shadow-2xl shadow-btn-shadow/50"
          />
          <img
            src={projectHome2.src}
            alt="project home 1"
            className="w-60 h-[20.688rem] object-cover -mb-5"
          />

          <img
            src={projectHome3.src}
            alt="project home 1"
            className="w-[12.125rem] h-64 object-cover ml-auto shadow-2xl shadow-btn-shadow/50 "
          />
          <img
            src={projectHome4.src}
            alt="project home 1"
            className="w-[13.438rem] h-36 mt-5"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
