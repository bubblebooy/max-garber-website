import React, { Component } from 'react';
import { Route, Switch , Redirect} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Home from './components/Home/Home'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/About" exact component={About} />
          <Route path="/Resume" exact component={Resume} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default App;
