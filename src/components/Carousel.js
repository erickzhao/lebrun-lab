import React from 'react'
import Link from 'gatsby-link'

const Carousel = ({slides}) => (
    <section className="hero is-medium has-carousel">
    <div className="hero-carousel carousel-animated carousel-animate-fade" data-autoplay="true">
      <div className='carousel-container'>
        {
          slides.map(s => (
            <div className='carousel-item has-background'>
              <img className="is-background" src={s.photo} alt={s.description} />
              <div className="title">{s.description}</div>
            </div>
          ))
        }
      </div>
      <div className="carousel-navigation is-overlay">
        <div className="carousel-nav-left">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </div>
        <div className="carousel-nav-right">
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div className="hero-body has-text-centered">
    </div>
  </section>
  )

export default Carousel