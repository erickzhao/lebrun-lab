import React, { Component } from "react";
import CarouselUtil from "../utils/carousel";
import Link from "gatsby-link";
import logo from '../img/logo.png';

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
      <div>
        <section
        className="hero is-large has-carousel"
        style={{ height: `600px` }}
      >
        <div
          className="hero-carousel carousel-animated carousel-animate-fade"
          data-autoplay="true"
        >
          <div className="carousel-container">
            {slides.map((s) => (
              <div
                className={"carousel-item has-background"}
                key={s.title}
              >
                <img
                  className="is-background"
                  src={s.headerImage}
                  alt={s.title}
                />
                <Link to={s.slug} className="title">{s.title}</Link>
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
      </div>
    );
  }
}

export default Carousel;
