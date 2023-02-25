import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartToy } from "./CartToy";

export default class ResizableCartToy extends Component {

    constructor(props) {
      super(props);
      this.state = { display: true };
    } 
  
    state = {
      width: 900,
    };
   
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
      return (
        <div>
          <div
            style={{
              width: this.state.width + "px",
              display: this.state.display ? "block" : "none",
            }}
          >
            <Slider {...settings}>
              {this.props.data.map((item, index) => (
                <CartToy key={index} {...item} />
              ))}
            </Slider>
          </div>
        </div>
      );
    }
}