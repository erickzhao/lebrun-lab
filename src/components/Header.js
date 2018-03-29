import React from 'react'

const Header = ({title, heading}) => (
  <section className="hero is-medium is-primary is-bold">
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
