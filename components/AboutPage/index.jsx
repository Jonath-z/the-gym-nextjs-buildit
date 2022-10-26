import React from "react";
import Footer from "../modules/_modules/Footer";
import Hero from "./Hero";
import PartenerAndStatistic from "./PartenerAndStatistic";
import Team from "./Team";

const AboutPage = () => {
  return (
    <section>
      <Hero />
      <PartenerAndStatistic />
      <Team />
      <Footer />
    </section>
  );
};

export default AboutPage;
