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
    TweenMax.to(".target", 1, {
      marginLeft:10, 
      backgroundColor: "red",
    });
    TweenMax.to(".target", 1, {
        marginLeft:"-10%", 
        delay: 1.5,
        backgroundColor: "blue", }
      );
  };
  render() {
    return(
      <div className="banner">
        <img 
          className="target"
          src="./assets/product.jpg"/>
      </div>
    )
  }
}

export default Banner;
