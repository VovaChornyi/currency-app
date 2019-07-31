import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../images/1.png";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";

export default class Home extends Component {
  render() {
    const imgStyle = {
      width: "640px",
      height: "640px"
    };

    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={imgStyle}
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
            style={imgStyle}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            style={imgStyle}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna,</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
