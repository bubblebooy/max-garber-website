// import React from 'react';
// import './Features.scss'
// import Feature from './Feature/Feature'
//
// const features = (props) => {
//   return (
//     <div className="Features" ref={(e)=>{console.log(e && e.children[0].clientHeight);}}>
//     {props.features.map((feature , index) =>(
//       <Feature key={index} {...feature} />
//     ))}
//     </div>
//   );
// }
//
// export default features;


import React, { Component } from 'react';
import './Features.scss'
import Feature from './Feature/Feature'

class Features extends Component {
  state = {
    height: null
  }
  featuresRef = null;
  refHandler = (element) => {
    this.featuresRef = element
    if(element){
      this.setState({height: 0})
    }
  }
  onLoadHandler = () => {
    if(this.featuresRef){
      let height = 0
      let height2 = 0
      let children = [...this.featuresRef.children]
      while (children.length > 0) {

          (height <= height2) ? height += children.shift().clientHeight : height2 += children.pop().clientHeight
        }
      (height < height2) ? height = height2 : height = height;
      if (height !== this.state.height){
        this.setState({height: height * 1.2})
      }
    }
  }

  render () {

    return (
      <div className="Features" style={{height: this.state.height}} ref={this.refHandler} onLoad={this.onLoadHandler}>
        {this.props.features.map((feature , index) =>(
          <Feature key={index} {...feature} />
        ))}
      </div>
    );
  }
}

export default Features;
