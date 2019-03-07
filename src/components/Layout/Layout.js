import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import './Layout.scss'

class Layout extends Component {
  state = {
    toolbarCollapsed: false,
    toolbarHovered: false,
    toolbarExpaned: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    if (!this.state.toolbarCollapsed && window.pageYOffset > 100) {
      this.setState({toolbarCollapsed: true})
    } else if(this.state.toolbarCollapsed && window.pageYOffset < 100) {
      this.setState({toolbarCollapsed: false})
    }
    if (this.state.toolbarExpaned){
      this.setState({toolbarExpaned: false})
    }
  }

  onToolbarClickedHandler = () => {
    this.setState({toolbarCollapsed: false})
  }
  onMenuClickedHandler = () => {
    this.setState((prevState) => ({toolbarExpaned: !prevState.toolbarExpaned}))
  }
  toolbarHoverOn = () => {
    this.setState({toolbarHovered: true})
  }
  toolbarHoverOff = () => {
    this.setState({toolbarHovered: false})
  }
  render () {
    return (
      <>
        <Toolbar
          collapsed={this.state.toolbarCollapsed && !this.state.toolbarHovered}
          expanded={this.state.toolbarExpaned}
          hoverOn={this.toolbarHoverOn}
          hoverOff={this.toolbarHoverOff}
          clicked={this.onToolbarClickedHandler}
          menuClicked={this.onMenuClickedHandler} />
        <main>
          {this.props.children}
        </main>
      </>
    );
  }
}

export default Layout;
