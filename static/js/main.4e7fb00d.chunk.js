(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(29).concat([function(e,t,a){e.exports=a.p+"static/media/About-Photo.dbc4f8cb.jpeg"},function(e,t,a){e.exports=a.p+"static/media/Max Garber Resume.61a046f1.pdf"},function(e,t,a){e.exports=a.p+"static/media/DnD-1.b85504fb.jpeg"},function(e,t,a){e.exports=a.p+"static/media/DnD-2.df1f2e7f.jpeg"},function(e,t,a){e.exports=a.p+"static/media/DnD-3.b336e82a.jpeg"},function(e,t,a){e.exports=a.p+"static/media/DnD-4.a4440d03.jpeg"},function(e,t,a){e.exports=a.p+"static/media/CriticalRolePrinted.872e9c8d.jpg"},function(e,t,a){e.exports=a.p+"static/media/CriticalRoleRendered.763d2e20.jpg"},function(e,t,a){e.exports=a.p+"static/media/FearSpren.ec857452.png"},function(e,t,a){e.exports=a.p+"static/media/PinguinMindflayer.181229d0.png"},function(e,t,a){e.exports=a.p+"static/media/RidingFacelessRex.f46958d4.jpeg"},,,function(e,t,a){e.exports=a(71)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(26),s=a.n(r),i=a(72),l=a(40),c=a(13),m=a(28),u=(a(51),a(3)),b=a(4),h=a(6),p=a(5),d=a(7),g=a(75),w=a(41),f=a(73),v=(a(52),a(53),a(74)),y=function(e){return o.a.createElement("li",null,o.a.createElement(v.a,{to:e.link,exact:e.exact},e.children))},E=function(e){return o.a.createElement("ul",null,o.a.createElement(y,{link:"/",exact:!0},"  Home "),o.a.createElement(y,{link:"/about"},"  About "),o.a.createElement(y,{link:"/resume"},"  Resume "),o.a.createElement(y,{link:"/programming"},"  Coding Projects "),o.a.createElement(y,{link:"/3D"},"  3D Models and Printing "))},k=function(e){var t="Toolbar";return t+=e.collapsed?" collapsed":"",o.a.createElement("header",{className:t,onClick:e.clicked,onMouseEnter:e.hoverOn,onMouseLeave:e.hoverOff},o.a.createElement(E,null))},j=(a(55),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={toolbarCollapsed:!1,toolbarHovered:!1},a.handleScroll=function(e){!a.state.toolbarCollapsed&&window.pageYOffset>100?a.setState({toolbarCollapsed:!0}):a.state.toolbarCollapsed&&window.pageYOffset<100&&a.setState({toolbarCollapsed:!1})},a.onToolbarClickedHandler=function(){a.setState({toolbarCollapsed:!1})},a.toolbarHoverOn=function(){a.setState({toolbarHovered:!0})},a.toolbarHoverOff=function(){a.setState({toolbarHovered:!1})},a}return Object(d.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{collapsed:this.state.toolbarCollapsed&&!this.state.toolbarHovered,hoverOn:this.toolbarHoverOn,hoverOff:this.toolbarHoverOff,clicked:this.onToolbarClickedHandler}),o.a.createElement("main",null,this.props.children))}}]),t}(n.Component)),S=(a(56),a(29)),O=a.n(S),C=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"About"},o.a.createElement("img",{src:O.a}),o.a.createElement("h2",null," About Me "),o.a.createElement("p",null,"Grew up in Santa Barbara, California"),o.a.createElement("p",null,"I went to University of California Santa Barbara where I got a Bachelor's degree in Physics"),o.a.createElement("p",null,"I am in Chicago while my SO is getting a Material Science PHD at North Western"),o.a.createElement("p",null,"While in Chicago I have been teaching my self Web Development, Unity and 3D Modeling"),o.a.createElement("p",null,"Interests include DnD, Boardgames, 3D printing, VR, Food, Programming Projects, Computer Games, Scuba Diving, Skiing "))}}]),t}(n.Component),x=a(30),D=a.n(x),N=(a(57),a(58),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={collapsed:!1},a.onClickHandler=function(){a.setState(function(e){return{collapsed:!e.collapsed}})},a}return Object(d.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e="collapsible",t=this.props.children;return this.state.collapsed&&(e+=" collapsed",t=null),o.a.createElement("div",{className:"Section"},o.a.createElement("button",{className:e,onClick:this.onClickHandler},this.props.name),o.a.createElement("div",{className:"content"},t))}}]),t}(n.Component)),T=(a(59),function(e){return o.a.createElement("a",{className:"Education",href:e.link,target:"_blank"},o.a.createElement("div",{className:"row-1"},o.a.createElement("p",{className:"dates"},e.startDate," ",e.endDate?" - ".concat(e.endDate):null)),o.a.createElement("div",{className:"row-2"},o.a.createElement("p",null,o.a.createElement("span",{className:"degree"}," ",e.degree,", "),o.a.createElement("span",{className:"school"}," ",e.school," ")),e.gpa?o.a.createElement("p",{className:"GPA"},"GPA: ",e.gpa):null))}),A=function(e){return o.a.createElement(o.a.Fragment,null,e.education.map(function(e,t){return o.a.createElement(T,Object.assign({key:t},e))}))},H=function(e){return o.a.createElement("div",{className:"Experience"},o.a.createElement("div",{className:"row-1"},o.a.createElement("p",{className:"dates"},e.startDate," ",e.endDate?" - ".concat(e.endDate):null)),o.a.createElement("div",{className:"row-2"},o.a.createElement("p",null,o.a.createElement("span",{className:"title"}," ",e.title,", "),e.professor?o.a.createElement("span",{className:"professor"},o.a.createElement("i",null," ",e.professor,", ")):null,o.a.createElement("a",{className:"company",href:e.companyLink,target:"_blank"}," ",e.company,". ")),o.a.createElement("p",{className:"summary"},e.summary),o.a.createElement("ul",{className:"details"},e.details.map(function(e,t){return o.a.createElement("li",{key:t},e)}))))},M=function(e){return e.experiences.map(function(e,t){return o.a.createElement(H,Object.assign({key:t},e))})},R=a(10),P=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={education:[{school:"University of California Santa Barbara - College of Creative Studies",startDate:"2009",endDate:"2013",degree:"Bachelor of Science in Physics",gpa:"3.48",link:"https://ccs.ucsb.edu/"},{school:"The Odin Project - Online Open Source Coding Curriculum",startDate:"2018",endDate:null,degree:"Full Stack Web Development",gpa:null,link:"https://www.theodinproject.com/home"}],experience:[{title:"Physics Engineer",professor:null,company:"Wyatt Aerosol Systems",companyLink:"http://www.wyattaerosol.com/",summary:"Development of an instrument for aerosol particle characterization",details:["Mechanical, optical, and electrical design and assembly of a prototype instrument","Wrote a program in Microsoft Visual Studio to run the instrument and collect data","Development of theory, running experiments, and data analysis with the prototype instrument","Development of Igor procedures to analyze data from the instrument"],startDate:"2013",endDate:"2017"},{title:"Research Assistant",professor:"David Weld, Assistant Professor",company:"Physics, UCSB",companyLink:"http://web.physics.ucsb.edu/~weld/",summary:"Design and construction of a high amperage water-cooled electromagnet for a magneto-optical trap",details:["Wrote a Mathematica program to plot the magnetic fields from current loops","Designed and constructed a jig and mandrels to wind magnetic coils","Awarded Summer Undergraduate Research Fellowship to work in the group"],startDate:"2012",endDate:"2013"},{title:"Research Assistant",professor:"Elizabeth Gwinn, Professor",company:"Physics, UCSB",companyLink:"http://www.physics.ucsb.edu/people/elisabeth-gwinn",summary:"Measured the fluorescence of DNA bound to silver nanoclusters",details:["Synthesized DNA bound silver nano clusters in aqueous solution","Measured the fluorescence of the solutions for excitation across a range of different wavelengths"],startDate:"2010",endDate:null},{title:"Robot Design",professor:"Amir Abo-Shaeer",company:"Dos Pueblos Engineering Academy",companyLink:"https://en.wikipedia.org/wiki/D%27Penguineers",summary:"Built a robot for the 2009 FIRST Robotics Competition",details:["Designed part of the robot in Solidworks","Machined various parts of the robot"],startDate:"2009",endDate:null}],skills:{}},a}return Object(d.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Resume paper"},o.a.createElement("h2",null," Max Garber "),o.a.createElement("h3",{className:"downloadBanner"}," ",o.a.createElement("a",{href:D.a}," Download PDF")," "),o.a.createElement("div",{className:"Contact-Info card"},o.a.createElement("p",null," ",o.a.createElement(R.a,{icon:"map-marked-alt"})," Chicago, IL "),o.a.createElement("p",null," ",o.a.createElement(R.a,{icon:"phone"})," +1 (805) 722 2219 "),o.a.createElement("p",null," ",o.a.createElement(R.a,{icon:"envelope"})," MaxGarber@dpengineering.org "),o.a.createElement("p",null," ",o.a.createElement("a",{href:"https://github.com/bubblebooy"}," ",o.a.createElement(R.a,{icon:["fab","github"]})," https://github.com/bubblebooy ")," "),o.a.createElement("p",null," ",o.a.createElement("a",{href:"www.linkedin.com/in/max-garber-8693964a"}," ",o.a.createElement(R.a,{icon:["fab","linkedin"]})," www.linkedin.com/in/max-garber-8693964a ")," ")),o.a.createElement(N,{name:"Education"},o.a.createElement(A,{education:this.state.education})),o.a.createElement(N,{name:"Experience"},o.a.createElement(M,{experiences:this.state.experience})),o.a.createElement(N,{name:"Skills"},o.a.createElement("ul",null,o.a.createElement("li",null," Mathematica "),o.a.createElement("li",null," IGOR Pro "),o.a.createElement("li",null," LATEX "),o.a.createElement("li",null," Machine Shop "),o.a.createElement("li",null," CAD: Solidworks, Autodesk Inventor  "),o.a.createElement("li",null," Microsoft Office "),o.a.createElement("li",null," Programing: JavaScript, Ruby on Rails, C, C++ "))))}}]),t}(n.Component),L=(a(63),a(64),a(65),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={collapsed:!1},a.onClickHandler=function(){a.setState(function(e){return{collapsed:!e.collapsed}})},a}return Object(d.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=o.a.createElement("div",{className:"Content"},this.props.children);return o.a.createElement("div",{className:"ProjectContainer"},o.a.createElement("button",{className:"Name",onClick:this.onClickHandler}," ",this.props.name," "),o.a.createElement("span",{className:"Description"}," ",this.props.description," "),!this.state.collapsed&&e)}}]),t}(n.Component)),B=(a(66),function(e){return o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"4"})),o.a.createElement("tr",{className:"tableCourse"},o.a.createElement("td",{rowSpan:e.assignments.length+1},o.a.createElement("a",{href:e.courseLink,target:"_blank"},e.courseName))),e.assignments.map(function(e){var t=e.view?o.a.createElement("a",{className:"btn",href:e.view,target:"_blank"}," View "):null;return o.a.createElement("tr",{key:e.name.replace(/\s/g,"")},o.a.createElement("td",{className:"assignmentName"}," ",o.a.createElement("a",{href:e.link,target:"_blank"}," ",e.name," ",o.a.createElement(R.a,{icon:"link"})," ")," "),o.a.createElement("td",null," ",o.a.createElement("a",{className:"github",href:e.github,target:"_blank"}," ",o.a.createElement(R.a,{icon:["fab","github"]})," ")," "),o.a.createElement("td",null," ",t," "))}),o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"4"})))}),F=function(e){return o.a.createElement("table",{className:"Curriculum"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Course"),o.a.createElement("th",{colSpan:"3"},"Assignment"))),e.courses.map(function(e){return o.a.createElement(B,{key:e.name.replace(/\s/g,""),courseName:e.name,courseLink:e.link,assignments:e.assignments})}))},I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={courses:[{name:"Web Delelopment 101",link:"https://www.theodinproject.com/courses/web-development-101",assignments:[{name:"Google Home",link:"https://www.theodinproject.com/courses/web-development-101/lessons/html-css",github:"https://github.com/bubblebooy/google-homepage",view:"https://bubblebooy.github.io/google-homepage/"},{name:"Rock Paper Scissors",link:"https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors",github:"https://github.com/bubblebooy/TOP-Rock-Paper-Scissors",view:"https://bubblebooy.github.io/TOP-Rock-Paper-Scissors"},{name:"ETCH-A-SKETCH",link:"https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project",github:"https://github.com/bubblebooy/TOP-Etch-A-Sketch",view:"https://bubblebooy.github.io/TOP-Etch-A-Sketch/"},{name:"Calculator",link:"https://www.theodinproject.com/courses/web-development-101/lessons/calculator",github:"https://github.com/bubblebooy/TOP-Calculator",view:"https://bubblebooy.github.io/TOP-Calculator/"},{name:"Ruby - Exercises",link:"https://www.theodinproject.com/courses/web-development-101/lessons/ruby",github:"https://github.com/bubblebooy/learn_ruby",view:null},{name:"Ruby on Rails - Blogger",link:"https://www.theodinproject.com/courses/web-development-101/lessons/ruby-on-rails",github:"https://github.com/bubblebooy/blogger",view:"https://ancient-earth-35702.herokuapp.com/"}]},{name:"Ruby programming",link:"https://www.theodinproject.com/courses/ruby-programming",assignments:[{name:"Caesar cipher",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/building-blocks?ref=lnav#project-1-caesar-cipher",github:"https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Caesar%20Ciphar/lib/ruby%20caesar_cipher.rb",view:null},{name:"Stock Picker",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/building-blocks?ref=lnav#project-2-stock-picker",github:"https://github.com/bubblebooy/miscellaneous-exercises/blob/master/ruby%20Stock%20Picker.rb",view:null},{name:"Substrings",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/building-blocks?ref=lnav#project-3-substrings",github:"https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Substrings.rb",view:null},{name:"Bubble Sort",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/advanced-building-blocks?ref=lnav#assignment-1",github:"https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Bubble%20Sort.rb",view:""},{name:"Enumerable Methods",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/advanced-building-blocks?ref=lnav#project-2-enumerable-methods",github:"https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Enumerable%20Methods/lib/Enumerable%20Methods.rb",view:""},{name:"Tic Tac Toe",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/oop?ref=lnav#assignment-1",github:"https://github.com/bubblebooy/miscellaneous-exercises/tree/master/Tic%20Tac%20Toe/lib",view:"https://repl.it/@bubblebooy/Tic-Tac-Toe"},{name:"Mastermind",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/oop?ref=lnav#assignment-2",github:"https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Mastermind.rb",view:"https://repl.it/@bubblebooy/Mastermind"},{name:"Hangman",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/file-i-o-and-serialization?ref=lnav#project-hangman",github:"https://github.com/bubblebooy/miscellaneous-exercises/tree/master/hangman",view:"https://repl.it/@bubblebooy/Hangman"},{name:"Fibonacci Sequence",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/recursion?ref=lnav#assignment-1",github:"https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Fibonacci.rb",view:""},{name:"Merge Sort",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/recursion?ref=lnav#assignment-2",github:"https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Merge%20Sort.rb",view:""},{name:"Linked Lists",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/linked-lists",github:"https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Linked%20List.rb",view:""},{name:"Searching Binary Search Trees",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/data-structures-and-algorithms?ref=lnav#assignment-1",github:"https://github.com/bubblebooy/miscellaneous-exercises/blob/master/Binary%20Tree.rb",view:""},{name:"Knight's Travails",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/data-structures-and-algorithms?ref=lnav#project-2-knights-travails",github:"https://github.com/bubblebooy/miscellaneous-exercises/blob/master/chess.rb",view:""},{name:"TTD Connect Four",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/testing-your-ruby-code?ref=lnav#project-tdd-connect-four",github:"https://github.com/bubblebooy/miscellaneous-exercises/tree/master/Connect%20Four",view:"https://repl.it/@bubblebooy/Connect-Four"},{name:"Chess",link:"https://www.theodinproject.com/courses/ruby-programming/lessons/ruby-final-project",github:"https://github.com/bubblebooy/TOP-chess",view:"https://repl.it/@bubblebooy/Chess"}]},{name:"Databases",link:"https://www.theodinproject.com/courses/databases",assignments:[{name:"SQL Zoo",link:"https://www.theodinproject.com/courses/databases/lessons/sql",github:"https://github.com/bubblebooy/miscellaneous-exercises/blob/master/SQL_zoo_solutions.sql",view:null}]},{name:"Ruby on Rails",link:"https://www.theodinproject.com/courses/ruby-on-rails",assignments:[{name:"Caesar Cipher",link:"https://www.theodinproject.com/courses/ruby-on-rails/lessons/sinatra-project?ref=lnav#project-1-caesar-cipher-reloaded",github:"https://github.com/bubblebooy/Sinatra_Caesar_Cipher",view:"https://gentle-meadow-83909.herokuapp.com/"},{name:"Hangman",link:"https://www.theodinproject.com/courses/ruby-on-rails/lessons/sinatra-project?ref=lnav#project-2-another-web-game",github:"https://github.com/bubblebooy/Sinatra_Hangman",view:"https://floating-atoll-54622.herokuapp.com/"},{name:"Members Only",link:"https://www.theodinproject.com/courses/ruby-on-rails/lessons/authentication?ref=lnav#project-2-members-only",github:"https://github.com/bubblebooy/members-only",view:"https://warm-beach-64050.herokuapp.com/"},{name:"Private Events",link:"https://www.theodinproject.com/courses/ruby-on-rails/lessons/associations?ref=lnav#project-2-private-events",github:"https://github.com/bubblebooy/private-events",view:"https://fathomless-caverns-64279.herokuapp.com/"},{name:"Flight Booker",link:"https://www.theodinproject.com/courses/ruby-on-rails/lessons/building-advanced-forms?ref=lnav#project-flight-booker",github:"https://github.com/bubblebooy/odin-flight-booker",view:"https://still-reaches-11939.herokuapp.com/"},{name:"Using a Third Party API",link:"https://www.theodinproject.com/courses/ruby-on-rails/lessons/apis?ref=lnav#project-2-using-a-third-party-api",github:"https://github.com/bubblebooy/odin-flickr",view:"https://lit-woodland-77992.herokuapp.com/"},{name:"Building Facebook",link:"https://www.theodinproject.com/courses/ruby-on-rails/lessons/final-project",github:"https://github.com/bubblebooy/odin-facebook",view:"https://vast-springs-17117.herokuapp.com/"},{name:"Ruby On Rails - Michael Hartl",link:"https://www.railstutorial.org/book",github:"https://github.com/bubblebooy/sample_app",view:"https://lit-taiga-83532.herokuapp.com/"}]},{name:"HTML and CSS",link:"https://www.theodinproject.com/courses/html5-and-css3",assignments:[{name:"NYT Article",link:"https://www.theodinproject.com/courses/html5-and-css3/lessons/positioning-and-floating-elements",github:"https://github.com/bubblebooy/Odin-HTML5andCSS3",view:"https://bubblebooy.github.io/Odin-HTML5andCSS3/detection-of-waves-in-space-buttresses-landmark-theory-of-big-bang.html"},{name:"Old Apple",link:"https://www.theodinproject.com/courses/html5-and-css3/lessons/building-with-backgrounds-and-gradients",github:"https://github.com/bubblebooy/Odin-HTML5andCSS3",view:"https://bubblebooy.github.io/Odin-HTML5andCSS3/apple.html"},{name:"Smashing Magazine",link:"https://www.theodinproject.com/courses/html5-and-css3/lessons/design-teardown",github:"https://github.com/bubblebooy/Odin-HTML5andCSS3",view:"https://bubblebooy.github.io/Odin-HTML5andCSS3/smashing.html"},{name:"The Next Web",link:"https://www.theodinproject.com/courses/html5-and-css3/lessons/building-with-responsive-design",github:"https://github.com/bubblebooy/Odin-HTML5andCSS3",view:"https://bubblebooy.github.io/Odin-HTML5andCSS3/thenextweb.html"},{name:"Newsweek",link:"https://www.theodinproject.com/courses/html5-and-css3/lessons/using-bootstrap",github:"https://github.com/bubblebooy/Odin-HTML5andCSS3",view:"https://bubblebooy.github.io/Odin-HTML5andCSS3/newsweek.html"}]},{name:"JavaScript",link:"https://www.theodinproject.com/courses/javascript",assignments:[{name:"Library",link:"https://www.theodinproject.com/courses/javascript/lessons/library",github:"https://github.com/bubblebooy/Odin-Javascript/blob/master/library.html",view:"https://bubblebooy.github.io/Odin-Javascript/library.html"},{name:"Tic Tac Toe",link:"https://www.theodinproject.com/courses/javascript/lessons/tic-tac-toe-javascript",github:"https://github.com/bubblebooy/Odin-Javascript",view:"https://bubblebooy.github.io/Odin-Javascript/ticTacToe.html"},{name:"My Restaurant",link:"https://www.theodinproject.com/courses/javascript/lessons/restaurant-page",github:"https://github.com/bubblebooy/Odin-Javascript/tree/master/Restaurant",view:"https://bubblebooy.github.io/Odin-Javascript/Restaurant/dist/index.html"},{name:"Todo List",link:"https://www.theodinproject.com/courses/javascript/lessons/todo-list",github:"https://github.com/bubblebooy/Odin-Javascript/tree/master/todos",view:"https://bubblebooy.github.io/Odin-Javascript/todos/dist/index.html"},{name:"Weather App",link:"https://www.theodinproject.com/courses/javascript/lessons/weather-app",github:"https://github.com/bubblebooy/Odin-Javascript/tree/master/weather",view:"https://bubblebooy.github.io/Odin-Javascript/weather/build/index.html"},{name:"Battleship",link:"https://www.theodinproject.com/courses/javascript/lessons/battleship",github:"https://github.com/bubblebooy/Odin-Javascript/tree/master/battleship",view:"https://bubblebooy.github.io/Odin-Javascript/battleship/build/index.html"},{name:"Where\u2019s Waldo",link:"https://www.theodinproject.com/courses/javascript/lessons/where-s-waldo-a-photo-tagging-app",github:"https://github.com/bubblebooy/waldo",view:"https://guarded-citadel-26034.herokuapp.com/"}]}]},a}return Object(d.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(L,{name:"JS Artifact",description:"Recreaction of Artifact in JavaScript"},o.a.createElement("p",null," A fun project to learn JavaScript Better "),o.a.createElement("p",null," ",o.a.createElement("a",{href:"https://playartifact.com/"},"Artifact")," is a Card game made by Valve. I Made JS-Artifact while waiting for Artifact to be realsed. JS-Artifact has about 80% of the cards from and 95% rules parity with Artifact. "),o.a.createElement("p",null,o.a.createElement("a",{href:"https://bubblebooy.github.io/Artifact-Javascript/dist/index.html",target:"_blank"}," JS Artifact ")," :",o.a.createElement("a",{href:"https://github.com/bubblebooy/Artifact-Javascript",target:"_blank"}," Github "))),o.a.createElement(L,{name:"Burger Builder",description:"A Project For learning React"},o.a.createElement("p",null,"The Udemy course: ",o.a.createElement("a",{href:"https://www.udemy.com/react-the-complete-guide-incl-redux/"},"React - The Complete Guide (incl Hooks, React Router, Redux). ")),o.a.createElement("p",null,"After finnishing The Odin Project I wanted to learn more React. "),o.a.createElement("p",null,o.a.createElement("a",{href:"https://bubblebooy.github.io/Burger-Builder/",target:"_blank"}," Burger Builder ")," :",o.a.createElement("a",{href:"https://github.com/bubblebooy/Burger-Builder",target:"_blank"}," Github "))),o.a.createElement(L,{name:"Shadesmar VR",description:"Fun VR project made in Unity"},o.a.createElement("p",null," I made this while teaching myself to Unity and Steam-VR "),o.a.createElement("p",null," Shadesmar is a realm in Brandon Sanderson's ",o.a.createElement("a",{href:"https://brandonsanderson.com/books/the-stormlight-archive/"},'"Stormlight Archive"')," book seires"),o.a.createElement("p",null," ",o.a.createElement("a",{href:"https://www.youtube.com/watch?v=DxbhAWInzyE&feature=youtu.be"}," Shadesmar VR ")," ")),o.a.createElement(L,{name:"Odin-Project",description:"Full Stack Coding Course"},o.a.createElement("p",null," I started ",o.a.createElement("a",{href:"https://www.theodinproject.com"},"The Odin Project")," to learn web development"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://www.theodinproject.com"},"The Odin Project")," is a Open Source Online Full Stack coding course."),o.a.createElement(F,{courses:this.state.courses})))}}]),t}(n.Component),_=(a(67),a(19)),J=(a(68),a(69),a(70),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={height:0,index:a.props.index,play:a.props.play,loaded:Array(a.props.imgSrc.length).fill(!1)},a.onLoadHandler=function(e,t){var n=Object(_.a)(a.state.loaded),o=a.state.height;n[t]=!0,(0==o||o>e.target.height)&&(o=e.target.height),a.setState({height:o,loaded:n})},a.onBackHander=function(){var e=a.state.index-1,t=a.props.imgSrc.length;a.setState({index:(e%t+t)%t})},a.onForwardHandler=function(){var e=a.state.index+1,t=a.props.imgSrc.length;a.setState({index:(e%t+t)%t})},a.onControllerHandler=function(){a.state.play?clearInterval(a.interval):a.interval=setInterval(function(){return a.onForwardHandler()},5e3),a.setState(function(e){return{play:!e.play}})},a}return Object(d.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return e.onForwardHandler()},5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=(Array(this.props.imgSrc.length).fill([]),null);this.props.imgTitles&&(t=o.a.createElement("div",{className:"ImgTitle"},"this.props.imgTitles"));var a=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"back",onClick:this.onBackHandler}," ",o.a.createElement(R.a,{icon:"angle-left"})," "),o.a.createElement("div",{className:"forward",onClick:this.onForwardHandler}," ",o.a.createElement(R.a,{icon:"angle-right"})," "),o.a.createElement("div",{className:"controller",onClick:this.onControllerHandler}," ",this.state.play?o.a.createElement(R.a,{icon:"pause"}):o.a.createElement(R.a,{icon:"play"})," "));return this.props.imgSrc.length<=1&&(a=null),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"Carousel",style:{height:this.state.height}},this.props.imgSrc.map(function(t,a){var n=e.state.loaded[a]?"loaded":"";return n+=e.state.index==a?" active":"",o.a.createElement("img",{key:a,src:t,onLoad:function(t){return e.onLoadHandler(t,a)},className:n})}),a),t)}}]),t}(n.Component)),W=function(e){return o.a.createElement("div",{className:"Feature"},o.a.createElement(J,{imgSrc:e.imgSrc,play:!0,index:0}),o.a.createElement("div",{className:"title"},e.title),o.a.createElement("div",{className:"description"},e.description))},G=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={height:null},a.featuresRef=null,a.refHandler=function(e){a.featuresRef=e,e&&a.setState({height:0})},a.onLoadHandler=function(){if(a.featuresRef){for(var e=0,t=0,n=Object(_.a)(a.featuresRef.children);n.length>0;)e<=t?e+=n.shift().clientHeight:t+=n.pop().clientHeight;(e=e<t?t:e)!==a.state.height&&a.setState({height:e+50})}},a}return Object(d.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Features",style:{height:this.state.height},ref:this.refHandler,onLoad:this.onLoadHandler},this.props.features.map(function(e,t){return o.a.createElement(W,Object.assign({key:t},e))}))}}]),t}(n.Component),U=a(31),V=a.n(U),z=a(32),Y=a.n(z),q=a(33),X=a.n(q),K=a(34),Q=a.n(K),Z=a(35),$=a.n(Z),ee=a(36),te=a.n(ee),ae=a(37),ne=a.n(ae),oe=a(38),re=a.n(oe),se=a(39),ie=a.n(se),le=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={features:[{title:"D&D figurines +",description:"Various models I printed to play DnD with. Most of these models I found online or extracted from Dota 2.",imgSrc:[V.a,Y.a,X.a,Q.a]},{title:"Critical Role - The Mighty Nine",imgSrc:[$.a,te.a]},{title:"Miscellaneous Models",imgSrc:[re.a,ie.a],description:"Various models I made in Blender"},{title:"Fear Spren",imgSrc:[ne.a],description:"This is a fear sprean from Brandon Sandersons 'The Stormlight Archive'. I made this as part of my Shadesmar VR project"}],abomaxtions:{title:"AboMAXations",imgSrc:[]}},a}return Object(d.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"ModelsPage"},o.a.createElement("h1",null,o.a.createElement("div",{className:"D"},"3D"),o.a.createElement("div",{style:{transform:"translateY(.1em)"}}," Models "),o.a.createElement("div",{className:"And"},"&"),o.a.createElement("div",{style:{transform:"translateY(.1em)"}}," Prints ")," "),o.a.createElement("div",{className:"Body"},o.a.createElement(G,{features:this.state.features})))}}]),t}(n.Component),ce=function(e){return o.a.createElement("div",{className:"Home"},o.a.createElement("div",{className:"HomeName"},o.a.createElement("h1",null," Hi, I'm Max ")),o.a.createElement(C,null),o.a.createElement(P,null),o.a.createElement(I,null),o.a.createElement(le,null))},me=a(15),ue=a(11),be=a(23);me.b.add(ue.g,ue.c,be.a,ue.e,be.b,ue.d,ue.b,ue.a,ue.h,ue.f);var he=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement(j,null,o.a.createElement(g.a,null,o.a.createElement(w.a,{path:"/About",exact:!0,component:C}),o.a.createElement(w.a,{path:"/Resume",exact:!0,component:P}),o.a.createElement(w.a,{path:"/programming",exact:!0,component:I}),o.a.createElement(w.a,{path:"/3D",exact:!0,component:le}),o.a.createElement(f.a,{exact:!0,from:"/Models",to:"/3D"}),o.a.createElement(w.a,{path:"/",exact:!0,component:ce}),o.a.createElement(f.a,{to:"/"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,de=Object(c.c)({root:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return e}}),ge=Object(c.e)(de,pe(Object(c.a)(m.a))),we=o.a.createElement(l.a,{store:ge},o.a.createElement(i.a,{basename:"/max-garber-website"},o.a.createElement(he,null)));s.a.render(we,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[42,1,2]]]);
//# sourceMappingURL=main.4e7fb00d.chunk.js.map