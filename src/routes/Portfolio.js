import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCards from "../components/PricingCards";
import Work from "../components/Work";

const Portfolio = () => {
  return (
  <div>
    <Navbar />
    <HeroImg2 heading="PORTFOLIO" text="Here is our photography"/>
    <Work />
    <PricingCards />
    <Footer />
  </div>
  );
};

export default Portfolio;