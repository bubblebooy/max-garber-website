import React, { Component } from 'react';
import './Models.scss'

class Models extends Component {
  render () {
    return (
      <div className="ModelsPage">
        <h1>
          <div className="D">3D</div>
          <div style={{transform: 'translateY(.1em)'}}> Models </div>
          <div className="And">&</div>
          <div style={{transform: 'translateY(.1em)'}}> Prints </div> </h1>
        <div className="Body">
          <li> DnD Prints</li>
          <li>Critical Role</li>
          <li>Miscellaneous</li>
          <li>3D Scan</li>
          <li>Abominations - Dota + 3D Scan</li>
          <li>Unity Projects</li>
        </div>
      </div>
    );
  }
}

export default Models;
