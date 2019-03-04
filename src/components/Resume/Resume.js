import React, { Component } from 'react';
import resume from '../../assets/Max Garber Resume.pdf'
import './Resume.scss'
import Section from './Section/Section'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Resume extends Component {
  render () {
    return (
      <div className="Resume paper">
        <h2> Max Garber </h2>
        <h3> <a href={resume}> Download PDF</a> </h3>
        <div className='Contact-Info card'>
          <p> <FontAwesomeIcon icon="map-marked-alt"/> Chicago, IL </p>
          <p> <FontAwesomeIcon icon="phone"/> +1 (805) 722 2219 </p>
          <p> <FontAwesomeIcon icon="envelope"/> MaxGarber@dpengineering.org </p>
          <p> <a href="https://github.com/bubblebooy"> <FontAwesomeIcon icon={['fab',"github"]} /> https://github.com/bubblebooy </a> </p>
          <p> <a href="www.linkedin.com/in/max-garber-8693964a"> <FontAwesomeIcon icon={['fab',"linkedin"]} /> www.linkedin.com/in/max-garber-8693964a </a> </p>
        </div>
        <Section name='Education'>
          <ul>
            <li>
              Bachelor of Science in Physics
            </li>
          </ul>
        </Section>
        <Section name='Experience'>
          <ul>
            <li>
              Physics Engineer, Wyatt Aerosol Systems
            </li>
            <li>
              Research Assistant, David Weld, Assistant Professor
            </li>
            <li>
              Research Assistant, Elizabeth Gwinn, Professor, Physics, UCSB.
            </li>
            <li>
              Robot Design, Amir Abo-Shaeer, Dos Pueblos Engineering Academy
            </li>
          </ul>
        </Section>
        <Section name='Skills'>
          <ul>
              <li> Mathematica </li>
              <li> IGOR Pro </li>
              <li> LATEX </li>
              <li> Machine Shop </li>
              <li> CAD: Solidworks, Autodesk Inventor  </li>
              <li> Microsoft Office </li>
              <li> Programing: JavaScript, Ruby on Rails, C, C++ </li>
          </ul>
         </Section>
      </div>
    );
  }
}

export default Resume;
