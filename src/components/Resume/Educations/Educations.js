import React from 'react';
//import './Educations.scss'
import Education from "./Education/Education"

const educations = (props) => {
  console.log(props.education);
  return (
    <>
      {props.education.map((edu , index) => (
        <Education key={index} {...edu}/>
      ))}
    </>

  );
}

export default educations;
