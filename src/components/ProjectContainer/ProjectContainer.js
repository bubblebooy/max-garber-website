import React, { Component } from 'react';
import './ProjectContainer.scss'

class ProjectContainer extends Component {
  state = {
    collapsed: false
  }

  onClickHandler = () => {
    this.setState((preState) => {
      return {collapsed: !preState.collapsed}
    })
  }
  render () {
    let content = (
      <div className="Content">
        {this.props.children}
      </div>
    )
    return (
      <div className="ProjectContainer">
        <button className="Name" onClick={this.onClickHandler}> {this.props.name} </button>
        <span className="Description"> {this.props.description} </span>
        {!this.state.collapsed && content}
      </div>
    );
  }
}

export default ProjectContainer;
