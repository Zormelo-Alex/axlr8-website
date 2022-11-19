import React from 'react';
import globe from "../resources/icons/earth.png";

const midsec = () => {
  return (
    <div className="midsec" id="services">
        <h2>A X L R 8</h2>
        <section id="contact">
          <div className="contact">
            <div className="cards">
              <h3>online booking</h3>
              <div className="card">
                <div className="icon">
                  <img src={globe} alt="" />
                </div>
                <div className="text">
                  <h4>choose your pies</h4>
                  <p>Enjoy</p>
                </div>
                <div className="line"></div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={globe} alt="" />
                </div>
                <div className="text">
                  <h4>choose your pies</h4>
                  <p>Enjoy</p>
                </div>
                <div className="line"></div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={globe} alt="" />
                </div>
                <div className="text">
                  <h4>choose your pies</h4>
                  <p>Enjoy</p>
                </div>
                <div className="line"></div>
              </div>
              <div className="card book">
                <div className="link"><a href="">Book now</a></div>
                <div className="options">more options</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="services">
            <div className="cards">
              <div className="card">
                <div className="image">
                  <img src={globe} alt="" />
                </div>
                <div className="text">
                  <h4>A lot of discount</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, illo cum dolorum tempore maxime voluptatum.</p>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={globe} alt="" />
                </div>
                <div className="text">
                  <h4>A lot of discount</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, illo cum dolorum tempore maxime voluptatum.</p>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={globe} alt="" />
                </div>
                <div className="text">
                  <h4>A lot of discount</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, illo cum dolorum tempore maxime voluptatum.</p>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={globe} alt="" />
                </div>
                <div className="text">
                  <h4>A lot of discount</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, illo cum dolorum tempore maxime voluptatum.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default midsec;