import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import first from "./assets/images/slider/1.jpg";
import sec from "./assets/images/slider/2.jpg";
import third from "./assets/images/slider/3.jpg";

class HomeSlider extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={first} alt='nil'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={sec} alt='nil'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={third} alt='nil'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default HomeSlider;
