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
    TweenMax.to(".target", 2, {
      delay: 0.75,
      bottom: 330,
      right: 150,
      scale: 1,
    });
    //pan slightly left while zooming to reveal lower half of cup
    TweenMax.to(".target", 1, {
      delay: 2.75,
      right: 200,
      bottom: 375,
      scale: 0.5,
    });
    TweenMax.to(".target", 1, {
      delay: 3.75,
      right: 50,
    });
    TweenMax.to(".f4Copy", 1, {
      delay: 3.75,
      opacity: 1, 
    });
    TweenMax.to(".f4Copy", 0.1, {
      delay: 5.75,
      opacity: 0
    });
    TweenMax.to(".target", 1, {
      delay: 5.75,
      scale: 0.2,
      right: 150,
      bottom: 275,
    });
    TweenMax.to(".f5Copy1", 0.75, {
      delay: 6.75,
      opacity: 1,
    });
    TweenMax.to(".f5Copy1", 1, {
      delay: 7.25,
      left: 0,
    });
    TweenMax.to(".f5Copy2", 1, {
      delay: 7.25, 
      opacity: 1,
    });
    TweenMax.to(".linkSlug", 0.1, {
      delay: 8,
      opacity: 1,
    });
    TweenMax.to(".target", 1, {
      delay: 8,
      opacity: 0,
      zIndex: -1,
    });
    TweenMax.to(".productResolve", 1, {
      delay: 8,
      opacity: 1,
      zIndex: 1,
    });
  };
  render() {
    return(
      <div className="banner">
        <img 
          className="target"
          src="./assets/product.jpg"/>
        <img className="f4Copy"
          src="./assets/f4_copy.png"/>
        <img className="f5Copy1"
          src="./assets/f5_copy1.png"/>
        <img className="f5Copy2"
          src="./assets/f5_copy2.png"/>
        <img className="linkSlug"
          src="./assets/cta.png"
          onClick={ () => { window.location.href = "http://craftny.io/"}}
        />
        <img className="productResolve"
          src="./assets/product_resolve.jpg"/>
      </div>
    )
  }
}

export default Banner;
