import "./FooterStyles.css";

import { Link } from "react-router-dom";
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{ color:"#A9BA9D", marginRight:"2rem" }}/>
                <p>Blue Springs, Missouri</p>
            </div>
            <div className="phone">
            <p><FaPhone size={20} style={{ color:"#A9BA9D", marginRight:"2rem" }}/>
            (816) 500-1083</p>
            </div>
            <div className="email">
            <p><FaMailBulk size={20} style={{ color:"#A9BA9D", marginRight:"2rem" }}/>
            rachelscott.kc@gmail.com</p>
            </div>
        </div>
        <div className="right">
            <h4 style={{color:"#A9BA9D"}}>About Me</h4>
            <p>Hi! My name is Rachel Scott.</p>
            <p>I am new to web development and am excited <br></br> to learn more about development and design.</p>
            <div className="social">
        <a href={`https://www.linkedin.com/in/rachelscottkc/`}>
        <FaLinkedin size={25} style={{ color:"#A9BA9D", marginRight:"1rem" }}/>
          </a>    
        <a href="https://github.com/r-scott25">
        <FaGithub size={25} style={{ color:"#A9BA9D", marginRight:"1rem" }}/>
        </a>
        </div>
        </div>
        </div>
    </div>
  )
}

export default footer