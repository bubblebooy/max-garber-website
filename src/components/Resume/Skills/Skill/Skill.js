import React from 'react';
import './Skill.scss'

const skill = (props) => {
  return (
    <div className="Skill">
      <div className="row-1">
        <p className="skill-group">{props.skillGroup}</p>
      </div>
      <div className="row-2">
        <ul className="skills">
          {props.skills.map((skill,index)=>(
            <li key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default skill;

// {
///   title: "Physics Engineer",
// /  professor: null,
///   company: "Wyatt Aerosol Systems.",
///   companyLink: "http://www.wyattaerosol.com/",
//   summary: "Development of an instrument for aerosol particle characterization",
//   details: [
//     "Mechanical, optical, and electrical design and assembly of a prototype instrument",
//     "Wrote a program in Microsoft Visual Studio to run the instrument and collect data",
//     "Development of theory, running experiments, and data analysis with the prototype instrument",
//     "Development of Igor procedures to analyze data from the instrument",
//   ],
//   startDate: "2013",
//   endDate: "2017",
// },
