import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { carouselItems } from "./items";
import "./style.css";

export default class Home extends Component {
  static getImg(image) {
    return <img className="d-block w-100" src={image} alt="First slide" />;
  }

  getItem = (item, key) => {
    return (
      <Carousel.Item key={key}>
        {Home.getImg(item.image)}
        <Carousel.Caption>
          <h3>{item.label}</h3>
          <p>{item.description} </p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  };

  render() {
    return <Carousel>{carouselItems.map(this.getItem)}</Carousel>;
  }
}
