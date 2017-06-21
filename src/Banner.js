import React, { Component } from 'react'; 
import { TweenMax, Power2, TimelineLite } from 'gsap';

class Banner extends Component {
  constructor() {
    super();
  };
  componentDidMount() {
    this.tweenMax();
  };
  tweenMax() {
    TweenMax.to(".target", 1, {marginLeft:10, backgroundColor: "red"});
  };
  render() {
    return(
      <div className="banner">
        <p className="target">Poo Poo Pee Pee</p>
      </div>
    )
  }
}

export default Banner;
