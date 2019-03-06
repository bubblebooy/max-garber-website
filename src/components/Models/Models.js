import React, { Component } from 'react';
import './Models.scss'
import Features from './Features/Features'
//DnD
import dnd1 from '../../assets/images/modelsAndPrints/DnD-1.jpeg'
import dnd2 from '../../assets/images/modelsAndPrints/DnD-2.jpeg'
import dnd3 from '../../assets/images/modelsAndPrints/DnD-3.jpeg'
import dnd4 from '../../assets/images/modelsAndPrints/DnD-4.jpeg'

import criticalRolePrinted from '../../assets/images/modelsAndPrints/CriticalRolePrinted.jpg'
import criticalRoleRendered from '../../assets/images/modelsAndPrints/CriticalRoleRendered.jpg'

class Models extends Component {
  state = {
    features: [
      {
        title : "D&D figurines +",
        description : "Various models I printed to play DnD with. Most of these models I found online or extracted from Dota 2.",
        imgSrc : [
          dnd1,
          dnd2,
          dnd3,
          dnd4,
        ]
      },
      {
        title : "Critical Role - The Mighty Nine",
        imgSrc : [
          criticalRolePrinted,
          criticalRoleRendered
        ],
      },
      // {
      //   title : "macePipe",
      //   imgSrc : [],
      // }
    ],
    abomaxtions: {
      title : "AboMAXations",
      imgSrc : [],
    },


  }
  render () {
    return (
      <div className="ModelsPage">
        <h1>
          <div className="D">3D</div>
          <div style={{transform: 'translateY(.1em)'}}> Models </div>
          <div className="And">&</div>
          <div style={{transform: 'translateY(.1em)'}}> Prints </div> </h1>
        <div className="Body">
          <Features features={this.state.features}/>
        </div>
      </div>
    );
  }
}

export default Models;
