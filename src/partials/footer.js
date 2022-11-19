import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const footer = () => {
  return (
    <div className="footer">
        <h2>AXLR8</h2>
        <p>Dot dot dot dot</p>
        <div className="links">
          <ul>
            <li><a href="">something</a></li>
            <li><a href="">something</a></li>
            <li><a href="">something</a></li>
            <li><a href="">something</a></li>
            <li><a href="">something</a></li>
            <li><a href="">something</a></li>
          </ul>
        </div>
        <div className="social-links">
          <ul>
            <li><a href=""><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a></li>
            <li><a href=""><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
            <li><a href=""><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
            <li><a href=""><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
            <li><a href=""><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a></li>
          </ul>
        </div>
        <div className="text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos ullam, non nulla laboriosam vitae nisi harum, asperiores incidunt cumque nam recusandae at neque ipsa, accusamus qui quisquam impedit. Corporis.</p>
        </div>
      </div>
  )
}

export default footer;