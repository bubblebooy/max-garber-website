import React from 'react';
import './Home.scss'
import About from "../About/About"
import Resume from "../Resume/Resume"
import Programming from "../Programming/Programming"
import Models from "../Models/Models"

const home = (props) => {
  return (
    <div className="Home">
      <div className="HomeName">
        <h1> Hi, I'm Max </h1>
      </div>
      <About/>
      <Resume/>
      <Programming/>
      <Models/>
    </div>
  );
}

export default home;
