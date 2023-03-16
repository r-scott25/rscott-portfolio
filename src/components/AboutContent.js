import "./AboutContentStyles.css";

import React from "react";

import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";
import Portrait from "../assets/portrait.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a web developer, having recently completed a full stack coding
          program through LaunchCode. Since finishing, I've been enjoying
          learning more about front end development and design!
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Portrait} className="img" alt="true" />
          </div>
          {/* <div className="img-stack bottom">
                    <img src={React2}
                    className="img" alt="true"/>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
