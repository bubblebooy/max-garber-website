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
      odin : [
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
      ]
  }
  render () {
    return (
      <>
        <ProjectContainer name='Metis' description="Immersive 12-week accredited data science bootcamp" >
          <p> Curriculum centered around Python, statistics, supervised and unsupervised machine learning, exploratory data analysis, databases, and visualization techniques </p>
          <p>
            Custom PC recommender:
            <a href="https://github.com/bubblebooy/Metis-Project-5-PC-recommender" target="_blank"> Github </a>
              <li> Developed a recommender system for custom PC-builds using data scraped from PcPartPicker.com </li>
              <li> Built a PC-build autoencoder using Keras </li>
              <li> Created a Flask web app for the recommender </li>

          </p>
          <p>
            Reddit Discussions of TV episodes :
            <a href="https://github.com/bubblebooy/Metis-Project-4" target="_blank"> Github </a>
            <br/>  Analysis of Reddit post via Natural Language Processing
            <li> Created a Mongo database from Reddit, The Movie Database, and Rotten Tomatoes </li>
            <li> Cleaning, Tokenization, POS tagging, Stopwords, Stemming, Count Vectorizer, TF-IDF </li>
            <li> Topic modeling using Latent Semantic Analysis and Sentiment analysis using VADER </li>

          </p>
          <p>
            <a href="https://public.tableau.com/profile/max.garber#!/vizhome/Book1_15887369472740/Covid-19" target="_blank"> Covid - 19 Risk Factors </a> :
            <a href="https://github.com/bubblebooy/Metis-Project-3-Covid19mx" target="_blank"> Github </a>
            <br/> Classification of Covid-19 mortality in Mexico
            <li> Created an SQL database with Mexican Health Department Covid-19 records </li>
            <li> Developed a logistic regression classification model for the survival of people with Covid-19 </li>
            <li> Created a Flask web app where you can calculate survival rate given pre-existing conditions </li>
            <li> Built Tableau story with my results </li>

          </p>
          <p>
            <a href="https://bubblebooy.github.io/2020/04/19/Project-2/" target="_blank"> Board Game Ratings </a> :
            <a href="https://github.com/bubblebooy/Metis-Project-2-BGG" target="_blank"> Github </a>
            <li> Scraped features and scores of board games from BoardGameGeek.com </li>
            <li> Models the relationship between board games features and their scores with a  linear regression model </li>

          </p>
        </ProjectContainer>

        <ProjectContainer name='Kaggle' description="Grow your data science skills by competing in exciting competitions" >
          <p> I competed in several Kaggle competitions to develop my Machine Learning Skills
            <br />
            <a href="https://www.kaggle.com/maxgarber" target="_blank"> Kaggle Profile </a>
          </p>
          <p>
            <a href="https://www.kaggle.com/c/deepfake-detection-challenge" target="_blank"> Deepfake Detection Challenge </a> :
            Finished top 8%.
            <br />
            Developed video deepfake classification in Keras with an Xception model into a CNN-LSTM.
          </p>
          <p>
            <a href="https://www.kaggle.com/c/understanding_cloud_organization" target="_blank"> Understanding Clouds from Satellite Images </a> :
            Finished top 9%.
            <br />
            Image segmentation of clouds from satellite Images in Keras using an ensemble of ResNet U-Nets and EfficientNet U-Nets
          </p>
          <p>
            <a href="https://www.kaggle.com/c/generative-dog-images" target="_blank"> Generative Dog Images </a> :
            Finished top 21%.
            <br />
            Developed a GAN from scratch to generate images of dogs in Keras
          </p>

        </ProjectContainer>

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
          <Crriculum courses={this.state.odin}/>
        </ProjectContainer>
      </>
    );
  }
}

export default Programming;
