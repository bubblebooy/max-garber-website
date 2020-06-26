import React, { Component } from 'react';
import './SubFeature.scss'

class SubFeature extends Component {
  state = {
    selected: 0
  }
  onClickHandler = (e,index)=>{
    this.setState({selected: index})
  }
  render () {

    return (
      <div className="SubFeature">
        <h2 className="title"> {this.props.title} </h2>
        <img src={this.props.imgSrc[this.state.selected]} alt={this.props.imgTitles ? this.props.imgTitles[this.state.selected] : ""} className="display"/>
        <h3> {this.props.imgTitles ? this.props.imgTitles[this.state.selected] : null} </h3>
        <p>{this.props.description}</p>
        <div className="thumnails">
          {this.props.imgSrc.map((src, index)=>{
            let className;
            (this.state.selected === index) ? className = "selected" : className = ""
            return(
              <img key={index} src={src} className={className} alt={this.props.imgTitles ? this.props.imgTitles[index] : ""} onClick={(e)=>this.onClickHandler(e,index)}/>
            )
          })}
        </div>
      </div>

    );
  }
}

export default SubFeature;
