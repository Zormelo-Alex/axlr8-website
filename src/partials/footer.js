import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import htulogo from "../resources/images/htulogo.jfif";

const footer = () => {
  return (
    <div className="footer">
        <h2>AXLR8</h2>
        <p><img src={htulogo} alt="" /></p>
        <div className="links">
          <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
        </div>
        <div className="social-links">
          <ul>
            <li><a href="#"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a></li>
          </ul>
        </div>
        <div className="text">
          <p>copyright &copy; 2023 AXLR8 | All rights reserved</p>
        </div>
      </div>
  )
}

export default footer;