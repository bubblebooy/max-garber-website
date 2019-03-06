import React, { Component } from 'react';
import { Route, Switch , Redirect} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Home from './components/Home/Home'
import Programming from './components/Programming/Programming'
import Models from './components/Models/Models'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone , faEnvelope, faMapMarkedAlt , faLink, faAngleRight, faAngleLeft, faPlay, faPause} from '@fortawesome/free-solid-svg-icons'
import { faGithub , faLinkedin } from '@fortawesome/free-brands-svg-icons' //
library.add(faPhone , faEnvelope, faGithub, faMapMarkedAlt, faLinkedin, faLink, faAngleRight, faAngleLeft, faPlay, faPause)

class App extends Component {
  render() {
    // console.log(library);
    return (
      <Layout>
        <Switch>
          <Route path="/About" exact component={About} />
          <Route path="/Resume" exact component={Resume} />
          <Route path="/programming" exact component={Programming} />
          <Route path="/3D" exact component={Models} />
          <Redirect exact from="/Models" to="/3D" />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default App;
