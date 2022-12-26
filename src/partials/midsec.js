import React from 'react';
import design from "../resources/icons/design.png";
import consult from "../resources/icons/consult.png";
import code from "../resources/icons/code.png";
import insta from "../resources/icons/insta.jfif";
import youtube from "../resources/icons/youtube.png";
import linkedin from "../resources/icons/linkedin.png";
import twitter from "../resources/icons/twitter.png";

const midsec = () => {
  return (
    <div className="midsec" id="services">
      <div className='note'>
        <h3 className='swo' data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">Services We Offer</h3>
        <p className='lorem' data-aos="fade-in" data-aos-delay="200">Since the conception of this club as a developer club, We have done <span className='highlight'>remote work</span> for agencies <span className='highlight'>consulted</span> for startups and <span className='highlight'>collaborated</span> with other clubs or entities to create digital products for both consumer and business use </p>
        <p className='lorem' data-aos="fade-in" data-aos-delay="200">We offer a wide range of services which includes programming and teaching.</p>
      </div>
        <h2 className='name'>A X L R 8</h2>
        <section>
          <div className="contact">
            <div className="cards" data-aos="fade-up">
              <h3 className='ob'>online booking</h3>
              <div className="card">
                <div className="icon">
                  <img src={design} alt="" />
                </div>
                <div className="text">
                  <h4>Esquisite Designs</h4>
                  <p>We create elegant designs suited for your needs following core design theory.<span>Whether <span className='highlight'>UI designs</span> or <span className='highlight'>3D model designs</span>, or even <span className='highlight'>animations and illustrations</span>, We've got you covered</span></p>
                </div>
                <div className="line"></div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={code} alt="" />
                </div>
                <div className="text">
                  <h4>Code</h4>
                  <p>We programme, design and develop <span className="highlight">mobile applications</span>, <span className="highlight">websites</span>, <span className="highlight">web-applications</span> and <span className="highlight">more</span> depending on the requirements of the user whiles strictly following core software development practices.</p>
                </div>
                <div className="line"></div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={consult} alt="" />
                </div>
                <div className="text">
                  <h4>Consulting</h4>
                  <p>We offer <span className="highlight">advisory assistance</span> adopting various forms of verbal and or non-verbal means of communication in the aid of clients who seek professional technological enlightenment.</p>
                </div>
                <div className="line"></div>
              </div>
              <div className="book">
                <div className="link"><a href="#">Book now</a></div>
              </div>
            </div>
          </div>
        </section>
        <section id='contact'>
          <div className="services">
            <div className="cards">
              <div className="card" data-aos="zoom-in" data-aos-delay="200">
                <div className="image">
                  <img src={linkedin} alt="" />
                </div>
                <div className="text">
                  <h4>AXLR8 on linkedin</h4>
                  <p>Our professional organizational platform where we share further insight on how and what we operate.</p>
                  <a href="">Find Us</a>
                </div>
              </div>
              <div className="card" data-aos="zoom-in" data-aos-delay="200">
                <div className="image">
                  <img src={twitter} alt="" />
                </div>
                <div className="text">
                  <h4>AXLR8 on twitter</h4>
                  <p>Our social platform where we host spaces, share helpful tech-tweets and promote ourselves.</p>
                  <a href="">find us</a>
                </div>
              </div>
              <div className="card" data-aos="zoom-in" data-aos-delay="200">
                <div className="image">
                  <img src={youtube} alt="" />
                </div>
                <div className="text">
                  <h4>AXLR8 on Youtube</h4>
                  <p>Our professional platform where we share club content and tutorials</p>
                  <a href="">find us</a>
                </div>
              </div>
              <div className="card" data-aos="zoom-in" data-aos-delay="200">
                <div className="image">
                  <img src={insta} alt="" />
                </div>
                <div className="text">
                  <h4>AXLR8 on insta</h4>
                  <p>Our social platform where we connect with and share images of club related activities and run promos.</p>
                  <a href="">find us</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default midsec;