import React from "react";
import Footer from "../modules/_modules/Footer";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import PartenersAndAbout from "./PartenersAndAbout";
import ProjectsSection from "./ProjectsSection";
import SocialSection from "./SocialSection";

const HomePage = () => {
  return (
    <section className="">
      <HeroSection />
      <ServicesSection />
      <PartenersAndAbout />
      <ProjectsSection />
      <SocialSection />
      <Footer />
    </section>
  );
};

export default HomePage;
