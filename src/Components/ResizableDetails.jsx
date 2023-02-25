import React, { Component } from "react";
import Slider from "react-slick";
import SırtÇantası1 from "../Image/cicek-bebek-bakim-sirt-cantasi-unisex_8682766322040_01.webp"
import SırtÇantası2 from "../Image/cicek-bebek-bakim-sirt-cantasi-unisex_8682766322040_02.webp"
import SırtÇantası3 from "../Image/cicek-bebek-bakim-sirt-cantasi-unisex_8682766322040_03.webp"
import SırtÇantası6 from "../Image/cicek-bebek-bakim-sirt-cantasi-unisex_8682766322040_06.webp"
import SırtÇantası5 from "../Image/cicek-bebek-bakim-sirt-cantasi-unisex_8682766322040_05.webp"



export default class ResizableDetails extends Component {
    render() {
      const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={SırtÇantası1} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots-2 slick-thumb-2",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };  
      return ( 
        <div className="slider">
          <Slider {...settings}>
            <div>
              <img src={SırtÇantası1} />
            </div>
            <div>  
              <img src={SırtÇantası2} />
            </div>
            <div>
              <img src={SırtÇantası3} />  
            </div>
            <div>
              <img src={SırtÇantası6} />
            </div>
            <div>
              <img src={SırtÇantası5} />
            </div>
          </Slider>
        </div>
      );
    }
  }