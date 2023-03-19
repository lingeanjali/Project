import "./FooterStyles.css";

import React from "react";

import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>𝓐व्हनकडे फोटोग्राफी,</p>
                        <p>Satara, Maharashtra</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    7620069997</h4>
                    
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    contact@5techg.com</h4>
                    
                </div>
            </div>

            <div className="right">
                <h4>About the Photo studio</h4>
                <p>Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.</p>
                <ul className="footerCircles">
                    <li><FaFacebook className="footerIcon"/></li>
                    <li><FaTwitter className="footerIcon"/></li>
                    <li><FaInstagram className="footerIcon"/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
