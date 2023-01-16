import React from 'react'
import logo from "../resources/images/logo.png";
import merch from "../resources/images/merch.jpg";
import olc from "../resources/images/olc.jfif";
import com from "../resources/icons/com.png";
import cc from "../resources/icons/cc.png";
import aa from "../resources/icons/aa.png";
import video1 from "../resources/videos/kunt.mp4";


const burger = () => {
    document.querySelector(".frontpage").classList.toggle("active");
    document.querySelector(".c").classList.toggle("no-scroll")
  }
  const lis = () => {
    document.querySelector(".frontpage").classList.remove("active");
    document.querySelector(".c").classList.remove("no-scroll")
  }
const frontPage = () => {
  return (
    <div className="frontpage">
      <div className="navbar">
        <a href="#">
          <div className="logo">
            <img src={logo} alt="axlr8 logo" />
            <p>AXLR8</p>
          </div>
        </a>
        <div className="navlinks">
          <ul>
            <li onClick={ lis }><a href="#about">About</a></li>
            <li onClick={ lis }><a href="#services">Services</a></li>
            <li onClick={ lis }><a href="#events">Events</a></li>
            <li onClick={ lis }><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div onClick={burger} className="burger">
          <div className="line"></div>
          <div className="line two"></div>
          <div className="line three"></div>
        </div>
      </div>
      <div className="flex">
        <div className="left">
          <div className="slogan">
            <h4>Wherever you go, <br /> Go with all <br /> your heart.</  h4>
          </div>
          <div className="card" data-aos="fade-left">
            <div className="item">
              <div className="image">
                <img src={olc} alt="img" loading='lazy'/>
              </div>
              <div className="text">
                <h4>Online Courses</h4>
                <p>Learn something new today!</p>
              </div>
              <div className="bottom">View</div>
            </div>
            <div className="item">
              <div className="image">
                <img src={merch} alt="img" loading='lazy'/>
              </div>
              <div className="text">
                <h4>Merchandise</h4>
                <p>Order something fashionable now!</p>
              </div>
              <div className="bottom">shop</div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="video">
            <div className="circle top"></div>
            <div className="circle side"></div>
            <div className="circle"></div>
            <video>
            {/* autoPlay muted loop */}
              <source src={video1} type="video/mp4"/>
            </video>
          </div>
          <div className="image one" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"><img src={com} alt="" loading='lazy'/></div>
          <div className="image two"><img src={cc} alt="" loading='lazy' /></div>
          <div className="image three" data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000"><img src={aa} alt="" loading='lazy'/></div>
        </div>
      </div>
    </div>
  )
}


export default frontPage;