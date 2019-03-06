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
  refHandler = (element) => {
    // if(element){
    //   let height = 0
    //   for (let child of element.children) {
    //     height =+ child.clientHeight
    //     console.log(child.clientHeight)
    //   }
    //   if (height != this.state.height){
    //     this.setState({height: height})
    //   }
    // }
  }
  render () {
    return (
      <div className="Features" style={{height: this.state.height}} ref={this.refHandler}>
        {this.props.features.map((feature , index) =>(
          <Feature key={index} {...feature} />
        ))}
      </div>
    );
  }
}

export default Features;
