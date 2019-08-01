import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../images/1.png";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import CarouselItem from "./CarouselItem";
import "./style.css";

export default class Home extends Component {
  carouselImage = image => {
    return <img className="d-block w-100" src={image} alt="First slide" />;
  };

  carouselItem = item => {
    return (
      <Carousel.Item>
        {this.carouselImage(item.image)}
        <Carousel.Caption>
          <h3>{item.label}</h3>
          <p>{item.description} </p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  };

  render() {
    const items = [
      new CarouselItem(img1, "Label1", "Desc1"),
      new CarouselItem(img2, "Label2", "Desc2"),
      new CarouselItem(img3, "Label3", "Desc3")
    ];

    return <Carousel>{items.map(this.carouselItem)}</Carousel>;
  }
}
