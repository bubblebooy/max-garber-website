import React from 'react';
//import './NavigationItems.scss'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {
  return (
    <ul>
      <NavigationItem link="/" exact >  Home </NavigationItem>
      <NavigationItem link="/about" >  About </NavigationItem>
      <NavigationItem link="/resume" >  Resume </NavigationItem>
    </ul>
  );
}

export default navigationItems;
