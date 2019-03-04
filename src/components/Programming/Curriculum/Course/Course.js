import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import './course.scss'

const course = (props) => {
  return (
    <>
      <tr className="tableCourse">
        <td rowSpan={props.assignments.length + 1}><a href={props.courseLink}  target="_blank">{props.courseName}</a></td>
      </tr>
      {props.assignments.map((assignment)=>{
        let view = assignment.view ? <a className="btn" href={assignment.view} target="_blank"> View </a> : null
        return (
          <tr key={assignment.name.replace(/\s/g, '')}>
            <td className="assignmentName"> <a href={assignment.link} target="_blank"> {assignment.name} </a> </td>
            <td> <a href={assignment.github} target="_blank"> <FontAwesomeIcon icon={['fab',"github"]} /> </a> </td>
            <td> {view} </td>
          </tr>
        )
      })}
      <tr><td colSpan="4"><br/></td></tr>
    </>
  );
}

export default course;

// <tr>
//   <td> <a href="https://www.theodinproject.com/courses/web-development-101/lessons/html-css?ref=lnav"> Google Home </a> </td>
//   <td> <a href="https://github.com/bubblebooy/google-homepage"> <FontAwesomeIcon icon={['fab',"github"]} /> </a> </td>
//   <td> <a className="btn" href="https://bubblebooy.github.io/google-homepage/"> View </a> </td>
// </tr>
// <tr>
//   <td> <a > ### </a> </td>
//   <td> <a > <FontAwesomeIcon icon={['fab',"github"]} /> </a> </td>
//   <td> <a className="btn" href="#"> View </a> </td>
// </tr>
// <tr>
//   <td> <a > ### </a> </td>
//   <td> <a > <FontAwesomeIcon icon={['fab',"github"]} /> </a> </td>
//   <td> <a className="btn" href="#"> View </a> </td>
// </tr>
