import React, { Component } from 'react';
import { Carousel } from "react-bootstrap"
import Officegif from "../../assets/carousalOneimg.jpg"
import "./MainCarousal.css"
import carousalTwo from "../../assets/carousal2.jpg"
import carousalThree from "../../assets/carousalthree.jpeg"

class MainCarousal extends Component {
    render() {
        return (
            <Carousel variant="dark" className="py-5 ">
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousal-img"
                    src={carousalThree}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>See our openings</h3>
                    <p>Start having a real impact on people's lives today</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousal-img"
                    src={carousalTwo}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>See our openings</h3>
                    <p>Start having a real impact on people's lives today</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousal-img"
                    src={Officegif}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default MainCarousal;