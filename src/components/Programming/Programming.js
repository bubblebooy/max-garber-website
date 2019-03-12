import React, { Component } from 'react';
import './Programming.scss'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import Crriculum from './Curriculum/Curriculum'

// {
//   name: "",
//   link: "",
//   github: "",
//   view: "",
// },

class Programming extends Component {
  state = {
      courses : [
        {
          name : "Web Delelopment 101",
          link : "https://www.theodinproject.com/courses/web-development-101",
          assignments : [
            {
              name: "Google Home",
              link: "https://www.theodinproject.com/courses/web-development-101/lessons/html-css",
              github: "https://github.com/bubblebooy/google-homepage",
              view: "https://bubblebooy.github.io/google-homepage/",
            },
            {
              name: "Rock Paper Scissors",
              link: "https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors",
              github: "https://github.com/bubblebooy/TOP-Rock-Paper-Scissors",
              view: "https://bubblebooy.github.io/TOP-Rock-Paper-Scissors",
            },
            {
              name: "ETCH-A-SKETCH",
              link: "https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project",
              github: "https://github.com/bubblebooy/TOP-Etch-A-Sketch",
              view: "https://bubblebooy.github.io/TOP-Etch-A-Sketch/",
            },
            {
              name: "Calculator",
              link: "https://www.theodinproject.com/courses/web-development-101/lessons/calculator",
              github: "https://github.com/bubblebooy/TOP-Calculator",
              view: "https://bubblebooy.github.io/TOP-Calculator/",
            },
            {
              name: "Ruby - Exercises",
              link: "https://www.theodinproject.com/courses/web-development-101/lessons/ruby",
              github: "https://github.com/bubblebooy/learn_ruby",
              view: null,
            },
            {
              name: "Ruby on Rails - Blogger",
              link: "https://www.theodinproject.com/courses/web-development-101/lessons/ruby-on-rails",
              github: "https://github.com/bubblebooy/blogger",
              view: "https://ancient-earth-35702.herokuapp.com/",
            },
          ],
        },
        {
          name : "Ruby programming",
          link : "https://www.theodinproject.com/courses/ruby-programming",
          assignments : [
            {
              name: "Caesar cipher",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/building-blocks?ref=lnav#project-1-caesar-cipher",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Caesar%20Ciphar/lib/ruby%20caesar_cipher.rb",
              view: null,
            },
            {
              name: "Stock Picker",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/building-blocks?ref=lnav#project-2-stock-picker",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/blob/master/ruby%20Stock%20Picker.rb",
              view: null
            },
            {
              name: "Substrings",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/building-blocks?ref=lnav#project-3-substrings",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Substrings.rb",
              view: null
            },
            {
              name: "Bubble Sort",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/advanced-building-blocks?ref=lnav#assignment-1",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Bubble%20Sort.rb",
              view: "",
            },
            {
              name: "Enumerable Methods",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/advanced-building-blocks?ref=lnav#project-2-enumerable-methods",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Enumerable%20Methods/lib/Enumerable%20Methods.rb",
              view: "",
            },
            {
              name: "Tic Tac Toe",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/oop?ref=lnav#assignment-1",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/tree/master/Tic%20Tac%20Toe/lib",
              view: "https://repl.it/@bubblebooy/Tic-Tac-Toe",
            },
            {
              name: "Mastermind",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/oop?ref=lnav#assignment-2",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Mastermind.rb",
              view: "https://repl.it/@bubblebooy/Mastermind",
            },
            {
              name: "Hangman",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/file-i-o-and-serialization?ref=lnav#project-hangman",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/tree/master/hangman",
              view: "https://repl.it/@bubblebooy/Hangman",
            },
            {
              name: "Fibonacci Sequence",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/recursion?ref=lnav#assignment-1",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Fibonacci.rb",
              view: "",
            },
            {
              name: "Merge Sort",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/recursion?ref=lnav#assignment-2",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Merge%20Sort.rb",
              view: "",
            },
            {
              name: "Linked Lists",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/linked-lists",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Linked%20List.rb",
              view: "",
            },
            {
              name: "Searching Binary Search Trees",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/data-structures-and-algorithms?ref=lnav#assignment-1",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Binary%20Tree.rb",
              view: "",
            },
            {
              name: "Knight's Travails",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/data-structures-and-algorithms?ref=lnav#project-2-knights-travails",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/blob/master/chess.rb",
              view: "",
            },
            {
              name: "TTD Connect Four",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/testing-your-ruby-code?ref=lnav#project-tdd-connect-four",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/tree/master/Connect%20Four",
              view: "https://repl.it/@bubblebooy/Connect-Four",
            },
            {
              name: "Chess",
              link: "https://www.theodinproject.com/courses/ruby-programming/lessons/ruby-final-project",
              github: "https://github.com/bubblebooy/TOP-chess",
              view: "https://repl.it/@bubblebooy/Chess",
            },
          ]
        },
        {
          name : "Databases",
          link : "https://www.theodinproject.com/courses/databases",
          assignments : [
            {
              name: "SQL Zoo",
              link: "https://www.theodinproject.com/courses/databases/lessons/sql",
              github: "https://github.com/bubblebooy/miscellaneous-exercises/blob/master/SQL_zoo_solutions.sql",
              view: null,
            },
          ]
        },
        {
          name : "Ruby on Rails",
          link : "https://www.theodinproject.com/courses/ruby-on-rails",
          assignments : [
            {
              name: "Caesar Cipher",
              link: "https://www.theodinproject.com/courses/ruby-on-rails/lessons/sinatra-project?ref=lnav#project-1-caesar-cipher-reloaded",
              github: "https://github.com/bubblebooy/Sinatra_Caesar_Cipher",
              view: "https://gentle-meadow-83909.herokuapp.com/",
            },
            {
              name: "Hangman",
              link: "https://www.theodinproject.com/courses/ruby-on-rails/lessons/sinatra-project?ref=lnav#project-2-another-web-game",
              github: "https://github.com/bubblebooy/Sinatra_Hangman",
              view: "https://floating-atoll-54622.herokuapp.com/",
            },
            {
              name: "Members Only",
              link: "https://www.theodinproject.com/courses/ruby-on-rails/lessons/authentication?ref=lnav#project-2-members-only",
              github: "https://github.com/bubblebooy/members-only",
              view: "https://warm-beach-64050.herokuapp.com/",
            },
            {
              name: "Private Events",
              link: "https://www.theodinproject.com/courses/ruby-on-rails/lessons/associations?ref=lnav#project-2-private-events",
              github: "https://github.com/bubblebooy/private-events",
              view: "https://fathomless-caverns-64279.herokuapp.com/",
            },
            {
              name: "Flight Booker",
              link: "https://www.theodinproject.com/courses/ruby-on-rails/lessons/building-advanced-forms?ref=lnav#project-flight-booker",
              github: "https://github.com/bubblebooy/odin-flight-booker",
              view: "https://still-reaches-11939.herokuapp.com/",
            },
            {
              name: "Using a Third Party API",
              link: "https://www.theodinproject.com/courses/ruby-on-rails/lessons/apis?ref=lnav#project-2-using-a-third-party-api",
              github: "https://github.com/bubblebooy/odin-flickr",
              view: "https://lit-woodland-77992.herokuapp.com/",
            },
            {
              name: "Building Facebook",
              link: "https://www.theodinproject.com/courses/ruby-on-rails/lessons/final-project",
              github: "https://github.com/bubblebooy/odin-facebook",
              view: "https://vast-springs-17117.herokuapp.com/",
            },
            {
              name: "Ruby On Rails - Michael Hartl",
              link: "https://www.railstutorial.org/book",
              github: "https://github.com/bubblebooy/sample_app",
              view: "https://lit-taiga-83532.herokuapp.com/",
            },
          ]
        },
        {
          name : "HTML and CSS",
          link : "https://www.theodinproject.com/courses/html5-and-css3",
          assignments : [
            {
              name: "NYT Article",
              link: "https://www.theodinproject.com/courses/html5-and-css3/lessons/positioning-and-floating-elements",
              github: "https://github.com/bubblebooy/Odin-HTML5andCSS3",
              view: "https://bubblebooy.github.io/Odin-HTML5andCSS3/detection-of-waves-in-space-buttresses-landmark-theory-of-big-bang.html",
            },
            {
              name: "Old Apple",
              link: "https://www.theodinproject.com/courses/html5-and-css3/lessons/building-with-backgrounds-and-gradients",
              github: "https://github.com/bubblebooy/Odin-HTML5andCSS3",
              view: "https://bubblebooy.github.io/Odin-HTML5andCSS3/apple.html",
            },
            {
              name: "Smashing Magazine",
              link: "https://www.theodinproject.com/courses/html5-and-css3/lessons/design-teardown",
              github: "https://github.com/bubblebooy/Odin-HTML5andCSS3",
              view: "https://bubblebooy.github.io/Odin-HTML5andCSS3/smashing.html",
            },
            {
              name: "The Next Web",
              link: "https://www.theodinproject.com/courses/html5-and-css3/lessons/building-with-responsive-design",
              github: "https://github.com/bubblebooy/Odin-HTML5andCSS3",
              view: "https://bubblebooy.github.io/Odin-HTML5andCSS3/thenextweb.html",
            },
            {
              name: "Newsweek",
              link: "https://www.theodinproject.com/courses/html5-and-css3/lessons/using-bootstrap",
              github: "https://github.com/bubblebooy/Odin-HTML5andCSS3",
              view: "https://bubblebooy.github.io/Odin-HTML5andCSS3/newsweek.html",
            },
          ]
        },
        {
          name : "JavaScript",
          link : "https://www.theodinproject.com/courses/javascript",
          assignments : [
            {
              name: "Library",
              link: "https://www.theodinproject.com/courses/javascript/lessons/library",
              github: "https://github.com/bubblebooy/Odin-Javascript/blob/master/library.html",
              view: "https://bubblebooy.github.io/Odin-Javascript/library.html",
            },
            {
              name: "Tic Tac Toe",
              link: "https://www.theodinproject.com/courses/javascript/lessons/tic-tac-toe-javascript",
              github: "https://github.com/bubblebooy/Odin-Javascript",
              view: "https://bubblebooy.github.io/Odin-Javascript/ticTacToe.html",
            },
            {
              name: "My Restaurant",
              link: "https://www.theodinproject.com/courses/javascript/lessons/restaurant-page",
              github: "https://github.com/bubblebooy/Odin-Javascript/tree/master/Restaurant",
              view: "https://bubblebooy.github.io/Odin-Javascript/Restaurant/dist/index.html",
            },
            {
              name: "Todo List",
              link: "https://www.theodinproject.com/courses/javascript/lessons/todo-list",
              github: "https://github.com/bubblebooy/Odin-Javascript/tree/master/todos",
              view: "https://bubblebooy.github.io/Odin-Javascript/todos/dist/index.html",
            },
            {
              name: "Weather App",
              link: "https://www.theodinproject.com/courses/javascript/lessons/weather-app",
              github: "https://github.com/bubblebooy/Odin-Javascript/tree/master/weather",
              view: "https://bubblebooy.github.io/Odin-Javascript/weather/build/index.html",
            },
            {
              name: "Battleship",
              link: "https://www.theodinproject.com/courses/javascript/lessons/battleship",
              github: "https://github.com/bubblebooy/Odin-Javascript/tree/master/battleship",
              view: "https://bubblebooy.github.io/Odin-Javascript/battleship/build/index.html",
            },
            {
              name: "Where’s Waldo",
              link: "https://www.theodinproject.com/courses/javascript/lessons/where-s-waldo-a-photo-tagging-app",
              github: "https://github.com/bubblebooy/waldo",
              view: "https://guarded-citadel-26034.herokuapp.com/",
            },
          ]
        }
      ],
  }
  render () {
    return (
      <>
        <ProjectContainer name='JS Artifact' description="Recreation of Artifact in JavaScript" >
          <p> A fun project to learn JavaScript Better </p>
          <p> <a href="https://playartifact.com/">Artifact</a> is a Card game made by Valve.
              I made JS-Artifact while waiting for Artifact to be released.
              JS-Artifact has about 80% of the cards from and 95% rules parity with Artifact. </p>
          <p>
            <a href="https://bubblebooy.github.io/Artifact-Javascript/dist/index.html" target="_blank"> JS Artifact </a> :
            <a href="https://github.com/bubblebooy/Artifact-Javascript" target="_blank"> Github </a>
          </p>
        </ProjectContainer>

        <ProjectContainer name='Burger Builder' description="A Project For learning React" >
          <p>The Udemy course: <a href="https://www.udemy.com/react-the-complete-guide-incl-redux/">React - The Complete Guide (incl Hooks, React Router, Redux). </a></p>
          <p>After finnishing The Odin Project I wanted to learn more React. </p>
          <p>
            <a href="https://bubblebooy.github.io/Burger-Builder/" target="_blank"> Burger Builder </a> :
            <a href="https://github.com/bubblebooy/Burger-Builder" target="_blank"> Github </a>
          </p>

        </ProjectContainer>
        <ProjectContainer name='Shadesmar VR' description="Fun VR project made in Unity" >
          <p> I made this while teaching myself to Unity and Steam-VR </p>
          <p> Shadesmar is a realm in Brandon Sanderson's <a href="https://brandonsanderson.com/books/the-stormlight-archive/">"Stormlight Archive"</a> book seires</p>
          <p> <a href="https://www.youtube.com/watch?v=DxbhAWInzyE&feature=youtu.be"> Shadesmar VR </a> </p>
        </ProjectContainer>

        <ProjectContainer name='Odin-Project' description="Full Stack Coding Course" >
          <p> I started <a href="https://www.theodinproject.com">The Odin Project</a> to learn web development</p>
          <p>
            <a href="https://www.theodinproject.com">The Odin Project</a> is a Open Source Online Full Stack coding course.
          </p>
          <Crriculum courses={this.state.courses}/>
        </ProjectContainer>
      </>
    );
  }
}

export default Programming;
