import React from 'react';
import './Toolbar.scss'
import NavigationItems from '../NavigationItems/NavigationItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const toolbar = (props) => {
  let className = "Toolbar"
  className += props.collapsed ? " collapsed" : ""
  className += props.expanded ? " expanded" : ""
  return (
    <header
      className={className}
      onClick={props.clicked}
      onMouseEnter={props.hoverOn}
      onMouseLeave={props.hoverOff}>
      <button className="menu" onClick={props.menuClicked}> <FontAwesomeIcon icon="bars"/> </button>
      <NavigationItems/>
    </header>
  );
}

export default toolbar;
