import React from "react";
import { services } from "../../../mock";

const ServicesSection = () => {
  return (
    <section className="py-44 bg-primary-bg">
      <h1 className="text-4xl text-center text-content-green-primary font-bold">
        Innovative Execution
      </h1>
      <div className="flex justify-between max-w-7xl mx-auto mt-44">
        {services.map((service, index) => {
          return (
            <div key={index} className="flex flex-col gap-5">
              <div className="bg-content-green-secondary w-fit h-fi p-5 rounded-md shadow-2xl shadow-content-green-primary">
                {service.icon}
              </div>
              <h3 className="text-content-green-primary font-bold text-2xl">
                {service.title}
              </h3>
              <p className="text-content-green-secondary w-[16.75rem]">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
