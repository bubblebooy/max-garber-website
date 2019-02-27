import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import './Layout.scss'

class Layout extends Component {
  render () {
    return (
      <>
        <Toolbar/>
        <main>
          {this.props.children}
        </main>
      </>
    );
  }
}

export default Layout;
