import React from 'react';
import './Toolbar.scss'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => {
  return (
    <header className='Toolbar'>
      <NavigationItems/>
    </header>
  );
}

export default toolbar;
