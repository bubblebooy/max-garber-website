import React from 'react';
//import './NavigationItems.scss'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {
  return (
    <ul>
      <NavigationItem link="/" exact >  Home </NavigationItem>
      <NavigationItem link="/about" >  About </NavigationItem>
      <NavigationItem link="/resume" >  Resume </NavigationItem>
      <NavigationItem link="/programming" >  Coding Projects </NavigationItem>
      <NavigationItem link="/3D" >  3D Models and Printing </NavigationItem>
    </ul>
  );
}

export default navigationItems;
