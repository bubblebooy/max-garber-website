import React, { Component } from 'react';
import './Models.scss'
import Features from './Features/Features'
import SubFeature from './SubFeature/SubFeature'
//DnD
import dnd1 from '../../assets/images/modelsAndPrints/DnD-1.jpeg'
import dnd2 from '../../assets/images/modelsAndPrints/DnD-2.jpeg'
import dnd3 from '../../assets/images/modelsAndPrints/DnD-3.jpeg'
import dnd4 from '../../assets/images/modelsAndPrints/DnD-4.jpeg'

import criticalRolePrinted from '../../assets/images/modelsAndPrints/CriticalRolePrinted.jpg'
import criticalRoleRendered from '../../assets/images/modelsAndPrints/CriticalRoleRendered.jpg'

import fearSpren from '../../assets/images/modelsAndPrints/FearSpren.png'

import pinguinMindflayer from '../../assets/images/modelsAndPrints/PinguinMindflayer.png'
import macePipe from '../../assets/images/modelsAndPrints/MacePipe.jpg'

import maxAbyssal from '../../assets/images/modelsAndPrints/MaxAbyssal.jpeg'
import maxDruid from '../../assets/images/modelsAndPrints/MaxDruid.jpeg'
import maxFish from '../../assets/images/modelsAndPrints/MaxFish.jpeg'
import maxSpider from '../../assets/images/modelsAndPrints/MaxSpider.jpeg'
import maxWarrior from '../../assets/images/modelsAndPrints/MaxWarrior.jpeg'
import ridingFacelessRex from '../../assets/images/modelsAndPrints/RidingFacelessRex.jpeg'

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
        description : "Modeled and printed most of The Mighty Nine from the DnD twitch show Critical Role.",
        imgSrc : [
          criticalRolePrinted,
          criticalRoleRendered
        ],
      },
      {
        title : "Miscellaneous Models",
        imgSrc : [
          pinguinMindflayer,
          macePipe
        ],
        description : "Various models I made in Blender",
      },
      {
        title : <p>Fear Spren</p>,
        imgSrc : [fearSpren],
        description : "This is a fear sprean from Brandon Sandersons 'The Stormlight Archive'. I made this as part of my Shadesmar VR project",
      }
    ],
    abomaxtions: {
      title : "AboMAXations",
      description : "I got a full body scan of myself at CES 2017 and combined that with various parts of Dota2 models to make these AboMAXations",
      imgSrc : [
        maxAbyssal,
        maxDruid,
        maxFish,
        maxSpider,
        maxWarrior,
        ridingFacelessRex,
      ],
      imgTitles: [
        "Abyssal",
        "Druid",
        "Fishmax",
        "Spidermax",
        "Warrior",
        "Riding Faceless Rex",
      ]
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
          <SubFeature {...this.state.abomaxtions}/>
        </div>
      </div>
    );
  }
}

export default Models;
