import React from 'react';
//import './Experiences.scss'
import Experience from "./Experience/Experience"

const experiences = (props) => {
  return (
    props.experiences.map((experience , index)=>(
      <Experience key={index} {...experience}/>
    ))
  );
}

export default experiences;
