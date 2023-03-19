import "./PricingCardsStyles.css";

import React from 'react'
import { Link } from "react-router-dom";

const PricingCards = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">Rs. 10000</p>
                <p>- Baby Photography -</p>
                <p>- Baby Shower Photography -</p>
                <p>- Election Banner -</p>
                <p>- Events -</p>
                <p>- Video Editing -</p>
                <Link to="/contact" className="btn">
                    VISIT NOW
                </Link>
            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">Rs. 15000</p>
                <p>- Baby Photography -</p>
                <p>- Marriage Photography -</p>
                <p>- Election Banner -</p>
                <p>- Events -</p>
                <p>- Video Editing -</p>
                <Link to="/contact" className="btn">
                    VISIT NOW
                </Link>
            </div>

            <div className="card">
                <h3>- Advanced -</h3>
                <span className="bar"></span>
                <p className="btc">Rs. 30000</p>
                <p>- Baby Photography -</p>
                <p>- Birthday Photography -</p>
                <p>- Election Banner -</p>
                <p>- Events -</p>
                <p>- Video Editing -</p>
                <Link to="/contact" className="btn">
                    VISIT NOW
                </Link>
            </div>

        </div>
    </div>
  )
};

export default PricingCards;
