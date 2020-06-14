import React from 'react';
//import './Skills.scss'
import Skill from "./Skill/Skill"

const skills = (props) => {
  return (
    props.skills.map((skill , index)=>(
      <Skill key={index} {...skill}/>
    ))
  );
}

export default skills;
