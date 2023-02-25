import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


  

export default class ResizableBrand extends Component {


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
            speed: 1500,
            slidesToShow: 3,
            slidesToScroll: 1,

            responsive: [{
                breakpoint: 1000,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              }]
        };
        return (
            <div>
                <div
                    style={{
                        padding:"10px 0px",
                        width: this.state.width + "px",
                        display: this.state.display ? "block" : "none",
                    }}
                >
                    <Slider {...settings}>
                        {this.props.image.map((item, index) => (
                            <div className="images" key={index}>
                                <img  src={require(`../Image${item.img}`)} />
                            </div>
                        ))}
                    </Slider>
                </div> 
            </div>
        );
    }
}
