import React from 'react';
import './Curriculum.scss'
import Course from './Course/Course'

const curriculum = (props) => {
  // console.log(props.courses);
  return (
    <table className="Curriculum">
      <tbody><tr>
        <th>Course</th>
        <th colSpan="3">Assignment</th>
      </tr></tbody>
      {props.courses.map((course)=>(
        <Course
          key={course.name.replace(/\s/g, '')}
          courseName={course.name}
          courseLink={course.link}
          assignments={course.assignments}/>
      ))}
    </table>
  );
}

export default curriculum;

// <Course courseName="Web Delelopment 101"/>
// <Course courseName="Ruby programming"/>
// <Course courseName="Databases"/>
// <Course courseName="Ruby on Rails"/>
// <Course courseName="HTML and CSS"/>
// <Course courseName="JavaScript"/>
