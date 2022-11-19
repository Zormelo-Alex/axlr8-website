import React from 'react';
import image1 from "../resources/images/ab.jpg";
import globe from "../resources/icons/earth.png";

const members = () => {
  return (
    <div className="member-section" id="members">
        <div className="container">
          <div className="swiper">
              <div className="members">
                <div className="member">
                  <img src={image1} alt="" />
                  <h5 className="name">Adolph Adu-Cherry</h5>
                  <p className="role">Big Boss</p>
                  <p className="quote">"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"</p>
                </div>
                <div className="member">
                  <img src={image1} alt="" />
                  <h5 className="name">Adu-Cherry</h5>
                  <p className="role">Big Boss</p>
                  <p className="quote">"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"</p>
                </div>
                <div className="member">
                  <img src={image1} alt="" />
                  <h5 className="name">Cherry</h5>
                  <p className="role">Big Boss</p>
                  <p className="quote">"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"</p>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
          </div>
        </div>
        <div className="other-thing">
          <div className="image">
            <img src={globe} alt="Members icon" />
          </div>
          <div className="texts">
            <h6>Handpicked places</h6>
            <h2>Members</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere exercitationem cumque! Adipisci harum, cumque dolores ea fugit ad saepe pariatur numquam dolorum doloremque, fuga delectus vel similique ipsa earum!</p>
          </div>
        </div>
      </div>
  )
}

export default members;