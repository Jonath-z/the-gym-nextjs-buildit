/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardBg from "../cards/AboutCard";

const AboutCard = ({ content }) => {
  return (
    <div className="relative  rounded-xl shadow-2xl shadow-btn-shadow/50">
      <img
        src={cardBg.src}
        alt="card background"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10 rounded-xl"
      />
      <img
        src={content.image}
        alt={content.name}
        className="w-full object-cover rounded-t-xl"
      />
      <div className="p-6">
        <p className="text-content-green-primary font-bold">{content.name}</p>
        <p className="text-base text-content-green-secondary">
          {content.description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
