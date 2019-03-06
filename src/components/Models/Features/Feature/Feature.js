import React from 'react';
import './Feature.scss'
import Carousel from "../../../Carousel/Carousel"

const feature = (props) => {
  return (
        <div className="Feature">
          <Carousel imgSrc={props.imgSrc} play index={0}/>
          <div className = "title">{props.title}</div>
          <div className = "description">{props.description}</div>
        </div>
  );
}

export default feature;

// {props.imgSrc ? <img src={props.imgSrc[0]}/> : null}
