import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer className="footer">
    <div className="level container">
      <div className="level-item">
        <div>
          <p className="title is-5">Quick Navigation</p>
          <ul>
            <li><span className="icon"><i className="fas fa-question-circle"></i></span>FAQ</li>
            <li><span className="icon"><i className="fas fa-pencil-alt"></i></span>Blog</li>
            <li><span className="icon"><i className="fas fa-tasks"></i></span>Minutes</li>
            <li><span className="icon"><i className="fas fa-money-bill-alt"></i></span>Finances</li>
          </ul>
        </div>
      </div>
      <div className="level-item">
        <div>
          <p className="title is-5">Contact us</p>
          <ul>
            <li><span className="icon"><i className="fas fa-map-pin"></i></span>3630 Rue University (Room 1060)</li>
            <li><span className="icon"><i className="fas fa-clock"></i></span>10:00 A.M. to 4:00 P.M (M-F)</li>
            <li><span className="icon"><i className="fas fa-at"></i></span><a href="mailto:ecsess.vpcomm@mcgilleus.ca">Send us an email</a></li>
          </ul>
        </div>
      </div>
      <div className="level-item">
        <div>
          <p className="title is-5">Social Media</p>
          <span className="icon is-medium"><a href={"https://www.facebook.com/ecsess"}><i className="fab fa-2x fa-facebook-square"></i></a></span>
          <span className="icon is-medium"><a href={"https://www.instagram.com/mcgill_ecsess"}><i className="fab fa-2x fa-instagram"></i></a></span>
          <span className="icon is-medium"><a href={"https://www.linkedin.com/company/ecsess/"}><i className="fab fa-2x fa-linkedin"></i></a></span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
