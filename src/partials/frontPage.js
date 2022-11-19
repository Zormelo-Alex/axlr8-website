import React from 'react'
import logo from "../resources/images/RPC-JP_Logo.png";
import image1 from "../resources/images/ab.jpg";
import image2 from "../resources/images/ahmed.JPG";

const burger = () => {
    document.querySelector(".frontpage").classList.toggle("active");
  }
  const lis = () => {
    document.querySelector(".frontpage").classList.remove("active");
  }

const frontPage = () => {
  return (
    <div className="frontpage">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="axlr8 logo" />
            <p>AXLR8</p>
          </div>
          <div className="navlinks">
            <ul>
              <li onClick={ lis }><a href="#about">About</a></li>
              <li onClick={ lis }><a href="#members">Services</a></li>
              <li onClick={ lis }><a href="#services">Contact Us</a></li>
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
            <div className="card">
              <div className="item">
                <div className="image">
                  <img src={image1} alt="" />
                </div>
                <div className="text">
                  <h4>international flights</h4>
                  <p>Lorem ipsum dolor</p>
                </div>
                <div className="bottom">details</div>
              </div>
              <div className="item">
                <div className="image">
                  <img src={image1} alt="" />
                </div>
                <div className="text">
                  <h4>international flights</h4>
                  <p>Lorem ipsum dolor</p>
                </div>
                <div className="bottom">details</div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="video">
              <div className="circle top"></div>
              <div className="circle side"></div>
              <div className="circle"></div>
              <img src={image2} />
            </div>
            <div className="image one"><img src={image2} /></div>
            <div className="image two"><img src={image2} /></div>
            <div className="image three"><img src={image2} /></div>
          </div>
        </div>
      </div>
  )
}

export default frontPage;