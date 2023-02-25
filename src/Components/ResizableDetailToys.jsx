import React, { Component } from "react";
import Slider from "react-slick";
import MaşınAkumlyatorlu1 from "../Image/baby-toys-samy-range-akulu-bebek-araba-12-v-kirmizi_8693461006371_01.webp"
import MaşınAkumlyatorlu2 from "../Image/baby-toys-samy-range-akulu-bebek-araba-12-v-kirmizi_8693461006371_02.webp"
import MaşınAkumlyatorlu3 from "../Image/baby-toys-samy-range-akulu-bebek-araba-12-v-kirmizi_8693461006371_03.webp"
import MaşınAkumlyatorlu4 from "../Image/baby-toys-samy-range-akulu-bebek-araba-12-v-kirmizi_8693461006371_04.webp"
import MaşınAkumlyatorlu5 from "../Image/baby-toys-samy-range-akulu-bebek-araba-12-v-kirmizi_8693461006371_05.webp"
import MaşınAkumlyatorlu6 from "../Image/baby-toys-samy-range-akulu-bebek-araba-12-v-kirmizi_8693461006371_06.webp"


export default class ResizableDetailToys extends Component {
    render() {
      const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={MaşınAkumlyatorlu1} />
            </a>
          );
        },  
        dots: true,
        dotsClass: "slick-dots-toy slick-thumb-toy",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
              <img src={MaşınAkumlyatorlu2} />
            </div>
            <div>   
              <img src={MaşınAkumlyatorlu4} />
            </div>
            <div>
              <img src={MaşınAkumlyatorlu6} />
            </div>
          </Slider>
        </div>
      );
    }
  }