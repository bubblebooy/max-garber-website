import React from 'react';
import './Education.scss'

const Education = (props) => {

  return (
    <a className="Education" href={props.link} target="_blank">
      <div className="row-1">
        <p className="dates">{props.startDate} {props.endDate ? ` - ${props.endDate}` : null}</p>
      </div>
      <div className="row-2">
        <p className="degree"> {props.degree}, </p>
        <p className="school"> {props.school} </p>
        {props.gpa ? <><br/><p className="GPA">GPA: {props.gpa}</p> </>: null}
      </div>
    </a>
  );
}

export default Education;

// school:  "University of California Santa Barbara, College of Creative Studies",
// startDate: "2009",
// endDate: "2013",
// degree: "Bachelor of Science in Physics",
// gpa:"3.48",
// link: "https://ccs.ucsb.edu/"
