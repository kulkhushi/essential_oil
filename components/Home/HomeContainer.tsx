"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import MySwiper from "../MySwiper";
import Certified from "./Certified";
import AboutSection from "./About";
import Manufacturing from "./Manufacturing";
import Specialization from "./Specialization";
import WhytoChoose from "./WhytoChoose";
import Categories from "./Categories";
import Collaboration from "./Collaboration";
import GlobalCoverage from "./GlobalCoverage";

const HomeContainer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,
    });
  }, []);

  return (
    <>
      <MySwiper />
      <AboutSection />
      <Manufacturing />
      <Specialization />
      <WhytoChoose />
      <Categories />
      <Collaboration />
      <GlobalCoverage/>
      <Certified />
    </>
  );
};

export default HomeContainer;
