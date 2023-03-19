import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/17.jpeg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
  <div className="hero">
    <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        <p>Hello Everyone...! Welcome To A</p>
        <h1>𝓐व्हनकडे फोटोग्राफी</h1>
        <div>
            <Link to="/portfolio" className="btn">Portfolio</Link>
            <Link to="/contact" className="btn btn-light">contact</Link>
        </div>
    </div>
  </div>
  );
};

export default HeroImg;
