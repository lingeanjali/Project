import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/28.jpeg";
import React2 from "../assets/21.jpeg";
import React3 from "../assets/1.jpeg";
import React4 from "../assets/2.jpeg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Know About 𝓐व्हनकडे फोटोग्राफी</h1>
            <p>These photo studio is placed in Satara.</p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true" />
                </div>
                
            </div> 
            <div className="img-container1">
                <div className="img-stack top1">
                    <img src={React3} className="img" alt="true" />
                </div>
                <div className="img-stack bottom1">
                    <img src={React4} className="img" alt="true" />
                </div>
            </div>   
        </div> 
    </div>
  );
};

export default AboutContent;
