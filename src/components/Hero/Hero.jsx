import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { images } from "../../constants";

const slides = [
  {
    name: "First slide",
    image: images.slide1,
  },
  {
    name: "Second slide",
    image: images.slide2,
  },
  {
    name: "Third slide",
    image: images.slide3,
  },
];

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <Carousel id="heroCarousel" fade>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={slide.image}
                alt={slide.name}
              />
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2 className="animate__animated animate__fadeInDown">
                    <span>Genesis</span> Restaurant
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <div>
                    <a href="#menu" className="btn-menu scrollto">
                      Our Menu
                    </a>
                    <a href="#book-a-table" className="btn-book scrollto">
                      Book a Table
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
