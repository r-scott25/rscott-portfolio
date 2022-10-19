import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT." text="Hi! My name is Rachel Scott." text2="I am new to web development and am excited
to learn more about development and design."/>
    <Footer/>
    </div>
  )
}

export default About