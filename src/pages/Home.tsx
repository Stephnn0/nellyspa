import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ServiceCard from "../components/Services";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Contact from "../components/Contact";
import SalonPriceList from "../components/Prices";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <main>
        <About />
        <br />
        <br />
        <br />

        <ServiceCard />
        <br />
        <br />
        <br />
        <Contact />
        <br />
        <br />
        <br />
        <SalonPriceList />
        <br />
        <br />
        <br />
      </main>
      <SocialMediaIcons />
    </>
  );
};

export default HomePage;
