import React, { Component } from "react";
import CarouselUtil from "../utils/carousel";

class Carousel extends Component {
  constructor(props) {
    super();
    this.state = {
      slides: props.slides
    };
  }
  componentDidMount() {
    const carousels = document.querySelectorAll(".carousel, .hero-carousel");
    carousels.forEach(c => {
      new CarouselUtil(c);
    });
  }
  render() {
    const { slides } = this.state;
    return (
      <section
        className="hero is-large has-carousel"
        style={{ height: `400px` }}
      >
        <div
          className="hero-carousel carousel-animated carousel-animate-fade"
          data-autoplay="true"
        >
          <div className="carousel-container">
            {slides.map((s, i) => (
              <div
                className={"carousel-item has-background"}
                key={s.description}
              >
                <img
                  className="is-background"
                  src={s.photo}
                  alt={s.description}
                />
                <div className="title">{s.description}</div>
              </div>
            ))}
          </div>
          <div className="carousel-navigation is-overlay">
            <div className="carousel-nav-left">
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </div>
            <div className="carousel-nav-right">
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="hero-body has-text-centered" />
      </section>
    );
  }
}

export default Carousel;
