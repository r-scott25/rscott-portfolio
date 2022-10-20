import "./WorkCardStyles.css";
import pro1 from "../assets/project1.png"
import { NavLink } from "react-router-dom";

import React from 'react'

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="image"/>
                <h2 className="project-title">Adventure Outdoors</h2>
                <div className="pro-details"></div>
                <p>Adventure Outdoors is an app that can be used by outdoor enthusiasts who want to rent gear for their next adventure. </p>
               
           <div className="pro-btns">
            <NavLink to="url.com" className="btn">View</NavLink>
            <NavLink to="https://github.com/Jul-2022-LC-LiftOff/Adventureland" className="btn">Source</NavLink>
           </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard