import React from 'react';
//import './Experience.scss'

const experience = (props) => {
  return (
    <div className="Experience">
      <div className="row-1">
        <p className="dates">{props.startDate} {props.endDate ? ` - ${props.endDate}` : null}</p>
      </div>
      <div className="row-2">
        <p>
          <span className="title"> {props.title}, </span>
          {props.professor ? <span className="professor"><i> {props.professor}, </i></span>: null}
          <a className="company" href={props.companyLink} target="_blank" rel="noopener noreferrer"> {props.company}. </a>
        </p>
        <p className="summary">
          {props.summary}
        </p>
        <ul className="details">
          {props.details.map((detail,index)=>(
            <li key={index}>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default experience;

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
