import React from 'react'

const Header = ({title, heading, photo}) => (
  <section className="hero is-medium is-primary is-bold" style={{background: `url(${photo}) no-repeat center center / cover fixed`}}>
  <div className="hero-body">
    <div className="container">
      <h1 className="title is-1">
        {title}
      </h1>
      <h2 className="subtitle">
        {heading}
      </h2>
    </div>
  </div>
</section>
)

export default Header
