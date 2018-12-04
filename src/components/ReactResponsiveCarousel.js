import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageSlide from "./ImageSlide";
import uuid from "uuid";

class ReactResponsiveCarousel extends React.Component {
  renderImageSlides = () => {
    const slideArray = [
      require("../images/hero-1.jpg"),
      require("../images/hero-2.jpg"),
      require("../images/hero-3.jpg"),
      require("../images/hero-4.jpg")
    ];

    return slideArray.map(url => <ImageSlide key={uuid()} src={url} />);
  };

  render() {
    return (
      <Carousel
        className="my-carousel"
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {this.renderImageSlides()}
      </Carousel>
    );
  }
}

export default ReactResponsiveCarousel;
