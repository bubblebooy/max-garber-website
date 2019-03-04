import React, { Component } from 'react';
import './Section.scss'

class Section extends Component {
  state = {
    collapsed: false
  }

  onClickHandler = () => {
    this.setState((preState) => {
      return {collapsed: !preState.collapsed}
    })
  }
  render () {
    let buttonClassName = "collapsible"
    let children = this.props.children
    if (this.state.collapsed) {
      buttonClassName += " collapsed"
      children = null;
    }
    return (
      <div className="Section">
      <button className={buttonClassName} onClick={this.onClickHandler}>
        {this.props.name}
      </button>
        <div className="content">
          {children}
        </div>
      </div>
    );
  }
}

export default Section;
