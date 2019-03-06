import React, { Component } from 'react';
import './Carousel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Carousel extends Component {
  state = {
    height: 0,
    index: this.props.index,
    play: this.props.play,
    loaded: Array(this.props.imgSrc.length).fill(false)
  }
  componentDidMount() {
    this.interval = setInterval(() => this.onForwardHandler(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onLoadHandler = (e,index) => {
    let loaded = [...this.state.loaded]
    let height = this.state.height
    loaded[index]=true
    if (height == 0 || height > e.target.height){
      height = e.target.height
    }
    this.setState({height: height, loaded: loaded})
  }

  onBackHander = () => {
    let index = this.state.index - 1
    let n = this.props.imgSrc.length
    this.setState({index : ((index%n)+n)%n})
  }
  onForwardHandler = () => {
    let index = this.state.index + 1
    let n = this.props.imgSrc.length
    this.setState({index : ((index%n)+n)%n})
  }
  onControllerHandler = () => {
    if (this.state.play){
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => this.onForwardHandler(), 5000);
    }
    this.setState((preState)=>({play: !preState.play}))
  }
  render () {
    let className = Array(this.props.imgSrc.length).fill([])
    let imgTitle = null
    if (this.props.imgTitles){
      imgTitle = (
        <div className="ImgTitle">
          this.props.imgTitles
        </div>
      )
    }
    let controlls = (
      <>
        <div className="back" onClick={this.onBackHandler}> <FontAwesomeIcon icon="angle-left"/> </div>
        <div className="forward" onClick={this.onForwardHandler}> <FontAwesomeIcon icon="angle-right"/> </div>
        <div className="controller" onClick={this.onControllerHandler}> {this.state.play ? <FontAwesomeIcon icon="pause"/>:<FontAwesomeIcon icon="play"/>} </div>
      </>
    )

    if (this.props.imgSrc.length <= 1) {
      controlls = null
    }
    return (
      <>
        <div className="Carousel" style={{height: this.state.height}}>
          {this.props.imgSrc.map((src,index)=>{
            let className = this.state.loaded[index] ? "loaded" : ""
            className += (this.state.index == index) ? " active" : ""
            return(
              <img key={index} src={src} onLoad={(e)=>(this.onLoadHandler(e,index))} className={className}/>
            )
          })}
          {controlls}
        </div>
        {imgTitle}
      </>
    );
  }
}

export default Carousel;
