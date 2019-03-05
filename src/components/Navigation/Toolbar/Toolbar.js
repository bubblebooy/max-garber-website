import React from 'react';
import './Toolbar.scss'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => {
  let className = "Toolbar"
  className += props.collapsed ? " collapsed" : ""
  return (
    <header
      className={className}
      onClick={props.clicked}
      onMouseEnter={props.hoverOn}
      onMouseLeave={props.hoverOff}>
      <NavigationItems/>
    </header>
  );
}

export default toolbar;
