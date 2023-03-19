import "./WorkCardStyles.css";

import React from "react";
import { NavLink, Link } from "react-router-dom";

const WorkCard = (props) => {
  return (
            <div className="project-card">
                <img src={props.imgsrc} alt="" />
                <h2 className="project-title">{props.title}</h2>
                
                    <div className="pro-btns">
                      <NavLink to={props.imgsrc} className="btn">
                        View
                      </NavLink>
                      <Link to="/contact" className="btn">
                        Visit
                      </Link>
                    </div>
                
            </div>
  );
};

export default WorkCard;
