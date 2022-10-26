/* eslint-disable @next/next/no-img-element */
import React from "react";
import PartenersLogos from "../../modules/_modules/PartenersLogos";
import parternerBuilding from "../../../assets/partnerBuilding.jpeg";
import Button from "../../modules/_modules/Button";

const PartnersAndAbout = () => {
  return (
    <section className="bg-secondary-bg pb-20 pt-10">
      <div className="max-w-7xl mx-auto py-10 ">
        <PartenersLogos />

        <div className="grid grid-cols-2 pt-20 gap-16">
          <img
            src={parternerBuilding.src}
            alt="partener building"
            className=" w-[500px] h-[375px] object-cover mt-5 ml-auto"
          />

          <div className="flex flex-col gap-6 w-[33.7rem]">
            <p className="text-sky-magnatat font-medium">About us</p>

            <h2 className="text-4xl font-bold text-content-green-primary leading-[3rem]">
              Owner and investor with a reputation
            </h2>
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
        </div>
      </div>
    </section>
  );
};

export default PartnersAndAbout;
