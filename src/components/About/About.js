import React, { Component } from 'react';
import './About.scss'
import aboutImage from "../../assets/images/About-Photo.jpeg"

class About extends Component {
  render () {
    return (
      <div className="About">
        <img src={aboutImage}></img>
        <h2> About Me </h2>
        <p>Grew up in Santa Barbara, California</p>
        <p>I went to University of California Santa Barbara where I got a Bachelor's degree in Physics</p>
        <p>I am in Chicago while my SO is getting a Material Science PHD at North Western</p>
        <p>While in Chicago I have been teaching myself Machine Learning, Web Development, Unity and 3D Modeling</p>
        <p>Interests include DnD, Boardgames, 3D printing, VR, Food, Programming Projects, Computer Games, Scuba Diving, and Skiing </p>

      </div>
    );
  }
}

export default About;
