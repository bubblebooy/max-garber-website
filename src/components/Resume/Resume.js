import React, { Component } from 'react';
import resume from '../../assets/Max Garber Resume.pdf'
import './Resume.scss'
import Section from './Section/Section'
import Educations from './Educations/Educations'
import Experiences from './Experiences/Experiences'
import Skills from './Skills/Skills'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Resume extends Component {
  state = {
    education: [
      {
        school:  "University of California Santa Barbara - College of Creative Studies",
        startDate: "2009",
        endDate: "2013",
        degree: "Bachelor of Science in Physics",
        gpa:"3.48",
        link: "https://ccs.ucsb.edu/"
      },
      {
        school:  "The Odin Project - Online Open Source Coding Curriculum",
        startDate: "2018",
        endDate: null,
        degree: "Full Stack Web Development",
        gpa: null,
        link: "https://www.theodinproject.com/home",
      },
      {
        school:  "5-course specialization by deeplearning.ai on Coursera",
        startDate: "2019",
        endDate: null,
        degree: "Deep Learning Specialization",
        gpa: null,
        link: "https://www.coursera.org/account/accomplishments/specialization/XD5JKRDYYEGY",
      },
    ],
    experience: [
      {
        title: "Data Scientist",
        professor: null,
        company: "Metis",
        companyLink: "https://www.thisismetis.com/",
        summary: "Immersive 12-week accredited data science bootcamp",
        details: [
           "Curriculum centered around Python, statistics, supervised and unsupervised machine learning, exploratory data analysis, databases, and visualization techniques",
           "Completed five self designed data science projects from conception to presentation; including data collection, data management, exploratory data analysis, modeling, and visualizations"
        ],
        startDate: "2020",
        endDate: null,
      },
      {
        title: "Physics Engineer",
        professor: null,
        company: "Wyatt Aerosol Systems",
        companyLink: "http://www.wyattaerosol.com/",
        summary: "Development of an instrument for aerosol particle characterization",
        details: [
          "Mechanical, optical, and electrical, design and assembly of a prototype instrument",
          "Wrote a program in Microsoft Visual Studio to run the instrument and collect data",
          "Development of theory, running experiments, and data analysis with the prototype instrument",
          "Development of Igor procedures to analyze data from the instrument",
        ],
        startDate: "2013",
        endDate: "2017",
      },
      {
        title: "Research Assistant",
        professor: "David Weld, Assistant Professor",
        company: "Physics, UCSB",
        companyLink: "http://web.physics.ucsb.edu/~weld/",
        summary: "Design and construction of a high amperage water-cooled electromagnet for a magneto-optical trap",
        details: [
          "Wrote a Mathematica program to plot the magnetic fields from current loops",
          "Designed and constructed a jig and mandrels to wind magnetic coils",
          "Awarded Summer Undergraduate Research Fellowship to work in the group",
        ],
        startDate: "2012",
        endDate: "2013",
      },
      {
        title: "Research Assistant",
        professor: "Elizabeth Gwinn, Professor",
        company: "Physics, UCSB",
        companyLink: "http://www.physics.ucsb.edu/people/elisabeth-gwinn",
        summary: "Measured the fluorescence of DNA bound to silver nanoclusters",
        details: [
          "Synthesized DNA bound silver nano clusters in aqueous solution",
          "Measured the fluorescence of the solutions for excitation across a range of different wavelengths",
        ],
        startDate: "2010",
        endDate: null,
      },
      {
        title: "Robot Design",
        professor: "Amir Abo-Shaeer",
        company: "Dos Pueblos Engineering Academy",
        companyLink: "https://en.wikipedia.org/wiki/D%27Penguineers",
        summary: "Built a robot for the 2009 FIRST Robotics Competition",
        details: [
          "Designed part of the robot in Solidworks",
          "Machined various parts of the robot"
        ],
        startDate: "2009",
        endDate: null,
      },
    ],
    skill: [
      {
        skillGroup: "Programming Tools",
        skills: [
          "Python","Git", "GitHub", "PostgreSQL", "MongoDB", "Ruby", "React", "HTML", "JavaScript", "CSS", "C#", "C"
        ],
      },
      {
        skillGroup: "Python Packages",
        skills: [
          "Keras","TensorFlow", "scikit-learn", "NumPy", "Pandas", "BeautifulSoup", "Selenium", "NLTK", "OpenCV"
        ],
      },
      {
        skillGroup: "Machine Learning Algorithms",
        skills: [
          "Regression","Clustering", "Dimensionality Reduction", "Natural Language Processing", "Recommenders", "Deep Learning",
           "Neural Networks", "Convolutional Neural Network"
        ],
      },
      {
        skillGroup: "Visualization",
        skills: [
          "Matplotlib", "Seaborn", "Tableau"
        ]
      },
      {
        skillGroup: "Other",
        skills: [
          "Mathematica", "IGOR Pro", "SolidWorks", "Autodesk Inventor", "LATEX"
        ]
      },
    ],
  }
  render () {
    return (
      <div className="Resume paper">
        <h2> Max Garber </h2>
        <h3 className="downloadBanner"> <a href={resume}> Download PDF</a> </h3>
        <div className='Contact-Info card'>
          <p> <FontAwesomeIcon icon="map-marked-alt"/> Santa Barbara, CA </p>
          <p> <FontAwesomeIcon icon="phone"/> +1 (805) 722 2219 </p>
          <p> <FontAwesomeIcon icon="envelope"/> MaxGarber@dpengineering.org </p>
          <p> <a href="https://github.com/bubblebooy"> <FontAwesomeIcon icon={['fab',"github"]} /> https://github.com/bubblebooy </a> </p>
          <p> <a href="https://www.linkedin.com/in/max-garber"> <FontAwesomeIcon icon={['fab',"linkedin"]} /> www.linkedin.com/in/max-garber </a> </p>
        </div>
        <Section name='Education'>
          <Educations education={this.state.education}/>
        </Section>
        <Section name='Experience'>
          <Experiences experiences={this.state.experience}/>
        </Section>
        <Section name='Skills'>
          <Skills skills={this.state.skill}/>
         </Section>
      </div>
    );
  }
}

export default Resume;
